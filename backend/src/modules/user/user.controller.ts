import { Request, Response } from "express";
import * as userService from "./user.service";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params["id"] as string);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error: any) {
    if (error?.code === "P2002") {
      res.status(409).json({ success: false, message: "Email already exists" });
      return;
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params["id"] as string, req.body);
    res.json({ success: true, data: user });
  } catch (error: any) {
    if (error?.code === "P2025") {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params["id"] as string);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error: any) {
    if (error?.code === "P2025") {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

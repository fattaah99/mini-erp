import bcrypt from "bcrypt";
import prisma from "../../config/prisma";
import { CreateUserDto, UpdateUserDto } from "./user.dto";

const SALT_ROUNDS = 10;

export const getAllUsers = async () => {
  return prisma.user.findMany({
    where: { deletedAt: null },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
};

export const getUserById = async (id: string) => {
  return prisma.user.findFirst({
    where: { id, deletedAt: null },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const createUser = async (dto: CreateUserDto) => {
  const hashedPassword = await bcrypt.hash(dto.password, SALT_ROUNDS);
  return prisma.user.create({
    data: {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: dto.role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
};

export const updateUser = async (id: string, dto: UpdateUserDto) => {
  const data: UpdateUserDto & { password?: string } = { ...dto };

  if (dto.password) {
    data.password = await bcrypt.hash(dto.password, SALT_ROUNDS);
  }

  return prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      updatedAt: true,
    },
  });
};

export const deleteUser = async (id: string) => {
  return prisma.user.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

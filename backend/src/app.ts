import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

// Routes
import userRoutes from "./modules/user/user.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes

app.use("/api/users", userRoutes);


app.get("/", (_, res) => {
  res.json({
    message: "Warehouse API Running",
    docs: "http://localhost:3000/api-docs",
  });
});

export default app;

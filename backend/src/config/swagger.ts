import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini ERP API",
      version: "1.0.0",
      description: "API documentation for Mini ERP - Warehouse Management System",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // Swagger akan membaca JSDoc dari file schemas dan semua file routes
  apis: [
    "./src/config/swagger.schemas.ts",
    "./src/modules/**/*.routes.ts",
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

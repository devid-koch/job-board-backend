import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Required for OpenAPI 3.0 specification
    info: {
      title: "Job Board API",
      version: "1.0.0",
      description: "A simple job board API for managing job postings.",
    },
    components: {
      schemas: {
        Job: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            title: {
              type: "string",
            },
            company: {
              type: "string",
            },
            location: {
              type: "string",
            },
            salary: {
              type: "number",
            },
            description: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, "./**/*.ts")],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export { swaggerDocs, swaggerUi };

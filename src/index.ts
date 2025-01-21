import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import jobRoutes from "./routes/jobRoutes";
import { swaggerDocs, swaggerUi } from "../swagger/swaggerConfig";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", jobRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

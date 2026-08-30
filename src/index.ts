import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();
const port = process.env.PORT || 5000;

//Global Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "SubGuard API is running!" });
});

app.use("/api/auth", authRoutes);

//Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

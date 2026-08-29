import "dotenv/config";
import express, {Request, Response } from "express";
import cors from "cors";


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({message: "SubGuard API is running!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
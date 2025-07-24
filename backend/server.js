import express from "express";
import "dotenv/config";
import postRoute from "./routes/postRoute.js";
import userRoute from "./routes/userRoute.js";
// import refreshTokenRoute from "./routes/refreshTokenRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";



const port = process.env.PORT;
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRoute);
app.use("/api/post", postRoute);
// app.use("/api/token", refreshTokenRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

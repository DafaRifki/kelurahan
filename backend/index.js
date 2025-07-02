import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import BeritaRoute from "./routes/BeritaRoute.js";
import PariwisataRoute from "./routes/PariwisataRoute.js";

dotenv.config();
const app = express();

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("✅ MongoDB Connected");
});

// Session
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    },
  })
);

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
  })
);

app.use(express.json());
app.use("/images", express.static("public/images"));

// Routes
app.use(UserRoute);
app.use(AuthRoute);
app.use(PariwisataRoute);
app.use(BeritaRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("🚀 Server running on port", process.env.APP_PORT);
});

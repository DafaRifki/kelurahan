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

// Koneksi MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

// session (MemoryStore default)
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
    },
  })
);

// middleware
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
  })
);
app.use(express.json());
app.use("/images", express.static("public/images"));
app.use(UserRoute);
app.use(AuthRoute);
app.use(PariwisataRoute);
app.use(BeritaRoute);

// Middleware untuk logging session
// app.use((req, res, next) => {
//   console.log("Session:", req.session);
//   next();
// });

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});

import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import PariwisataRoute from "./routes/PariwisataRoute.js";
dotenv.config();

const app = express();

// menyimpan data terakhir user yang login
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// untuk membuat table sesuai dari model
// (async () => {
//   await db.sync();
// })();

// session
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

// middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(PariwisataRoute);
app.use("/images", express.static("public/images"));

// membuat table session
// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});

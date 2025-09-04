import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import runDb from "./config/db.config.js";
import giftsApplicationRoute from "./routes/giftsApplication.js";
import sppApplicationRoute from "./routes/sppApplication.js";
import fadApplicationRoute from "./routes/fadApplication.js";
import coursesApplicationRoute from "./routes/coursesApplication.js";
import ssmApplicationRoute from "./routes/ssmApplication.js";
// import contactRoute from "./routes/contact.js";
// import newsletterSubsRoute from "./routes/newsletterSubs.js";
// import fsaRoute from "./routes/fsa.js";

dotenv.config();
const app = express();

//cors
const allowedOrigins = ["https://amittcsl.com", "http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

//Middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

//Database connection
runDb();

//routing
app.use("/application/gifts", giftsApplicationRoute);
app.use("/application/spp", sppApplicationRoute);
app.use("/application/fad", fadApplicationRoute);
app.use("/application/courses", coursesApplicationRoute);
app.use("/application/ssm", ssmApplicationRoute);
// app.use("/message", contactRoute);
// app.use("/newsletter", newsletterSubsRoute);
// app.use("/fsa", fsaRoute);

app.listen(process.env.PORT, (e) =>
  console.log(e || `Successfully connected to server ${process.env.PORT}`)
);

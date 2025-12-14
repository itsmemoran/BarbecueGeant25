import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import ticketRoutes from "./routes/tickets.js";
import sendRoutes from "./routes/send.js";


dotenv.config();
const app = express();


app.use(cors({
  origin: "http://localhost:5173", 
  // si Vite tourne sur 5173 (par défaut). Sinon remplace par ton port.
  credentials: true
}));


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/send", sendRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

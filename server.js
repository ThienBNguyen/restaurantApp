import { press } from "express";
import { cors } from "cors";
import { } from "./api/restaurants.route.js";

const app = server()

app.use(cors())
app.use(express.json())

app.use("/app/vi/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))
export default app
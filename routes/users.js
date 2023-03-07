import express, { response } from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, thii s auth")
})

export default router
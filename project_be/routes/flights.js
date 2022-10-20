import { Express } from "express";

const router= Express.Router();

router.get("/", (req, res) =>{
    res.send("Flights are on!")
})

export default router 
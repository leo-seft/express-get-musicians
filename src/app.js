const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll()
    res.json(musicians)
})

app.get("/musicians/:id", async(req, res) => {
    const musicianId = req.params.id
    const musicians = await Musician.findByPk(musicianId)
    res.status(200).json(musicians)
})

app.use(express.json())




module.exports = app;
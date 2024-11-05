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
app.use(express.urlencoded())

app.post('/musicians', async (req, res) => {
    const newMusician = await Musician.create(req.body)
    res.status(201).json(newMusician)
})

app.put('/musicians', async (req, res) => {
const musicianId = req.params.id
const musician = await Musician.findByPk(musicianId)
await musician.update(req.body)
res.status(200).json(musician)
})

app.delete('/musicians', async (req, res) => {
    const musicianId = req.params.id
    const musician = await Musician.findByPk(musicianId)
    await musician.destroy()
    res.status(204).send
})

module.exports = app;
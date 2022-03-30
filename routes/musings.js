const express = require('express');
const router = express.Router();
const Musing = require('../models/Musing')


router.get('/musings', async (req, res) => {
    try {
        const musings = await Musing.find();
        res.status(200).json(musings)
    }catch(err) {
        res.status(404).json({message: err})
    }
})

router.post('/musings', async (req, res) => {
    const musing = new Musing({
        title: req.body.title,
        musingBody: req.body.musingBody
    });
    try {
     const savedMusing = await musing.save()
     res.status(200).json({message: "Musing created successfully!"})
    } catch (err) {
        res.status(400).json({message: "Sorry please try submitting your musing again. Make sure you have a valid title and something in the text area."})
    }
 })

 //Find specific musing
router.get('/musings/:id', async (req, res) => {
    try {
        const musing = await Musing.findById(req.params.id)
        res.status(200).send(musing);
    } catch (err) {
         res.status(404).json({message: "Sorry please try submitting your musing again. Make sure you have a valid title and something in the text area."})
    }
    
})

router.put('/musings/:id', async (req, res) => {
    const id = req.params.id;
    const updatedMusing = {
        title: req.body.title,
        musingBody: req.body.musingBody
    }
    try {
        const musing = await Musing.findByIdAndUpdate(id, updatedMusing)
        res.status(200).json({message: "Musing updated successfully!"})
    }catch(err){
        res.status(404).json({message: "Could not find musing."})
    }
    
})


 module.exports = router;
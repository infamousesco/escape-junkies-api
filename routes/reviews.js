const express = require('express');
const router = express.Router();
const Review = require('../models/Review');


router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews)
    }catch(err) {
        res.json({message: err})
    }
})

//Find specific review
router.get('/reviews/:id', async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
        res.json(review)
    }catch(err){
        res.json({message: err})
    }
    
})

router.put('/reviews/:id', async (req, res) => {
    const id = req.params.id;
    const updatedReview = {
        title: req.body.title,
        reviewBody: req.body.reviewBody
    }
    try {
        const review = await Review.findByIdAndUpdate(id, updatedReview)
        res.status(200).json({message: "Review updated successfully!"})
    }catch(err){
        res.json({message: err})
    }
    
})

router.post('/reviews', async (req, res) => {
   const review = new Review({
       title: req.body.title,
       reviewBody: req.body.reviewBody
   });
   try {
    const savedReview = await review.save()
    res.status(200).json({message: "Review created successfully!"})
   } catch (err) {
        res.status(400).json({message: "Sorry please try submitting your review again. Make sure you have a valid title and something in the review area."})
   }
})



module.exports = router;
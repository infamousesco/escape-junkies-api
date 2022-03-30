const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send('Meet The Junkies')
})


router.get('/lock-guide', (req, res)=> {
    res.send('Lock Guide Explaination')
})

module.exports = router;
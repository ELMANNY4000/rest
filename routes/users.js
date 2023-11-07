const express = require('express');
const router = express.Router();

router.get('/users',  (req, res) => {  
    res.send("welcome to user page")
})

router.get('/users/id',  (req, res) => {  
    res.send("welcome to one user")
})

router.post('/users',  (req, res) => {  
    res.send("new user added")
})

router.put('/users/id',  (req, res) => {  
    res.send("updata a new user")
})

router.delete('/users/id',  (req, res) => {  
    res.send("remove one user")
})

module.exports = router
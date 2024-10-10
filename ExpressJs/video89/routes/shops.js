const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('shopping');
});
router.get('/about', (req, res) => {
    res.send('About shopping');
});
module.exports = router
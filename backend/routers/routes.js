const router = require('express').Router();
const { Signup } = require('../controllers/Signup');
const { Login } = require('../controllers/Login');
const { Feed } = require('../controllers/Feed');
const { NewTweet } = require('../controllers/NewTweet');


router.post('/signup', Signup);
router.post('/login', Login);
router.get('/feed', Feed);
router.post('/newtweet', NewTweet);

module.exports = router;

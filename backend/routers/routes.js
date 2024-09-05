const router = require('express').Router();
const { Feed, NewTweet } = require('../controllers/Posts.controllers');
const { Signup, Login } = require('../controllers/User.controllers');


router.post('/signup', Signup);
router.post('/login', Login);
router.get('/feed', Feed);
router.post('/newtweet', NewTweet);

module.exports = router;

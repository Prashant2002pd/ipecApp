const router = require('express').Router();
const { sendMessage, getMessage } = require('../controllers/message.controllers');
const { Feed, NewTweet } = require('../controllers/Posts.controllers');
const { Signup, Login } = require('../controllers/User.controllers');
const verifyJWT = require('../middlewares/auth.middleware');

// 
router.post('/signup', Signup);
router.post('/login', Login);

// 
router.get('/feed', Feed);
router.post('/newtweet', NewTweet);

// Message Routes

router.post("/send/:id",verifyJWT,sendMessage)
router.get("/:id",verifyJWT,getMessage)

module.exports = router;

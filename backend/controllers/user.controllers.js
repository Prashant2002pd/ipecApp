const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Signup = async (req, res) => {
    console.log("SIGNUP")
    try {


        const { username, email, password } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }



        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);


        // Create a new user
        user = new User({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();


        // Create a JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET, // Use environment variable
            { expiresIn: '3600' }
        );


        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
};

const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
  
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Create a JWT token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET, // Use environment variable
        { expiresIn: "3600" }
      );
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  

module.exports={
    Signup,
    Login
}

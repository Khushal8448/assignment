const generateToken = require("../config/generateToken");
const db = require("../db");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pics } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields.");
  }

  const userExists = await db.user.findFirst({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  const user = await db.user.create({
    name,
    email,
    password,
    pics,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pics: user.pics,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the User");
  }
});

const zod = require("zod");

const loginSchema = zod.object({
  email: zod.string().email({message: "Invalid email input!"}),
  password: zod.string().min(8,{message: "Password must be at least 8 characters!"}).max(20, {message: "Password must be less than 20 characters!"}),
});

const registerSchema = zod.object({
  username: zod.string().min(3, {message: "Username must be at least 3 characters!"}).max(20, {message: "Username must be less than 20 characters!"}),
  email: zod.string().email({message: "Invalid email input!"}),
  password: zod.string().min(8, {message: "Password must be at least 8 characters!"}).max(20, {message: "Password must be less than 20 characters!"}),
});

module.exports = {
  loginSchema,
  registerSchema,
};
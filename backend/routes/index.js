const { Router } = require("express");
const router = Router();
const userRoutes = require("./user");
const authRoutes = require("./auth")

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;

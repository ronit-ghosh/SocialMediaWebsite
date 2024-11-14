const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello from User Routes" });
});

module.exports = router;
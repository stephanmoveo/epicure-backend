const express = require('express');
const router = express.Router();
const auth = require("../MiddleWares/Auth");

router.use("/admin", auth.protect, require("../routes/AdminRoute"));
router.use("/user", require("../routes/UserRoute"));
router.use("/docs", express.static("../apidoc"));


module.exports = router
const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get('/admin', adminController.getAdminPage);
router.post('/admin', adminController.saveUserData);

module.exports = router;
var express = require('express');
var router = express.Router();
const path = require('path');

const paymentController = require("../controllers/paymentController")

// Ruta de prueba
router.get('/products', paymentController.product);

// ----------------------------------------------------------------------------------------------------------
router.post("/create-checkout-session", paymentController.pay)
// ----------------------------------------------------------------------------------------------------------

module.exports = router;

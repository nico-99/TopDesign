const fs = require('fs');
const path = require('path');

const stripe = require('stripe')('sk_test_51HDbwXG26hjHnMFzzgtAH1FYOdeiYSBbIoxLWJQaSD2yfPu7cPjngpt97UpE3TIdWPWdfXff31lfJ7o7OrgLmgo400Tl61qGMX');

const paymentController = {
  product: (req, res) => {
    res.render('prueba')
  },

  pay: async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "T-shirt",
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "https://example.com/success",
        cancel_url: "https://example.com/cancel",
      });

      res.json({ id: session.id });
    }
    catch (error) {
      res.send(error)
    }

  },

};

module.exports = paymentController;
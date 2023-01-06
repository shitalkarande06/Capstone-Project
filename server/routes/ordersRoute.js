const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51MJUKWSFsE1EXjyKX0jlJ4JbxcWWc8ZRWe4SC8IV47gtQASiUlwJEOfT9QmD02yxo2pSFdztWymfiMr2hNZojuJu00X38s0qdk"
);
const Orders = require("../models/orderModel");

router.post("/placeorders", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "INR",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newOrder = new Orders({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();
      res.send("payment Done");
    } else {
      res.send("Payent failed");
    }
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
    });
  }
});

// route for fetching orders
router.post("/getuserorders", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Orders.find({ userid: userid });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = router;

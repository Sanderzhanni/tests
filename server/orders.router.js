const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});

router.post("/placeOrder", (req, res)=>{
  const order = new Order({
    fullName,
    burger,
    drink
  });
  order.save(err=>{
    if(err) return res.send("error");
    res.send(200);
});
});

module.exports = router;


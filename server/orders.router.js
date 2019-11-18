const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});

router.post("/", (req, res)=>{
  const order = new Order(req.body);
  order.save(err=>{
    if(err) return res.send(500);
    res.send(200);
  });
});

router.post("/search", (req, res)=>{
  Order.find(req.body, (err, item)=>{
    if (err) {
      console.log("error: ", err);
      return res.send(err);
    }
    console.log(item);
    res.send(item);
  });
});

module.exports = router;


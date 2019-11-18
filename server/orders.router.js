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

router.post("/search", async (req, res)=>{
  console.log(req.body);
  //const order1 = new Order(req.body);
  Order.find(createSearch(req.body), (err, item) => {
    if (err) {
        console.log(err); 
        res.status(500).send(err);
        return;
    }
    res.send(item);
  });
});

const createSearch = ({fullName, drink, burger}) => {
  const query = {};
  if (fullName.trim().length !== 0) query.fullName = fullName;
  if (drink.trim().length !== 0) query.drink = drink;
  if (burger.trim().length !== 0) query.burger = burger;
  return query;
};

module.exports = router;


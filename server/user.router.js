const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});


router.post("/", (req, res)=>{
  const user = new User(req.body);
  user.save(err=>{
    if(err) return res.send(500);
    res.send(200);
  });
});


/** Add something here*/


module.exports = router;


const express=require("express");
const router=express.Router();
const bodyparser=require("body-parser");
module.exports=router;

router.use(bodyparser.urlencoded({"extended":false}))

router.post("/getDetails",function(req,res){
	res.send({"data":req.body.username});
})

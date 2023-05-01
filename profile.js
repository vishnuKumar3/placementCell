const express=require("express");
const bodyparser=require("body-parser")
const multer=require("multer")
const profile=express.Router()
const sql=require("mysql");
const fs=require("fs");
let conn=require("./dbConnection.js")

module.exports=profile

profile.use(express.json());
profile.use(express.static("./static/frontend"))
profile.use(bodyparser.urlencoded({"extended":false}))
profile.use(multer({"dest":"./static/frontend/resume"}).any())




profile.post("/addProfile",function(req,res){
	console.log(req.body);
	console.log(req.files)
	var details=req.body;
	var totalDetails=[details.idNumber,details.firstName,details.lastName,details.mobile,details.birthDate,details.address,details.marks10,details.marks12,details.marksBtech];
	totalDetails.push(details.idNumber+".pdf");
	conn.query("insert into profile values(?,?,?,?,?,?,?,?,?,?)",totalDetails,function(err){
		if(err) console.log(err);
	})
	fs.readFile(req.files[0].path,function(err,data){
		if(err) console.log(err)
		else{
			fs.writeFile(__dirname+"/static/frontend/resume/"+req.body.idNumber+".pdf",data,function(err){
				if(err) console.log(err)
				else {fs.unlink(req.files[0].path,function(err){
					if(err) console.log(err);
					else res.sendFile(__dirname+"/static/frontend/home.html");	
				}
				);}
			})
		}
	})
})

profile.post("/getProfile",function(req,res){
	//console.log(req.body);
	console.log(req.body.id);
	conn.query(`select * from profile where id='${req.body.id}'`,function(err,data){
		if(err) console.log(err)
		//console.log(data);
		return res.json({"json":data});
	})
})


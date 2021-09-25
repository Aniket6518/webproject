const express=require('express');
const app=express();
const path=require('path');
const port=8000;
const hbs=require('hbs');

//connecting to index.html/public

const csspath=path.join(__dirname,"../public");
app.use(express.static(csspath));

const static_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",static_path);
hbs.registerPartials(partial_path);


//routing
app.get("/",(req,res)=>{    
    res.render("index.hbs");
});

app.get("/about",(req,res)=>{
    res.render("about.hbs");
});

app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
});

app.get("*",(req,res)=>{
    res.render("404error.hbs");
});

app.listen(port,()=>{
    console.log("listening to port 8000");
});
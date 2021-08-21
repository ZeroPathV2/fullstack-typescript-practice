//import { MikroORM } from '@mikro-orm/core';
//import express from 'express'

// cant use react with rxpress?

// import React from 'react';
// import Home from "./components/body";

// return (
//     <div className="container">
//         <Home/>
//   </div>  
// );



const main = async () => {
    const express = require('express');

    const app = express();

app.get('/',(_: any,res: any)=>{
    res.send('Home page');
   
})
    
app.get('/about',(_: any,res: any)=>{
    res.send('About Page');
})
    

app.listen(3000,()=>{
    console.log('Server started on Port:3000');
})
}

main().catch((err)=>{
    console.error(err);
});
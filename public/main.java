// const express = require('express')
// const app = express();
// const port = 3000;
// const path = require ("path");


// app.use (express.urlencoaded({extended:true}));                   ///////////////
one line missing

// app.set ("view engine", "ejs");
// app.set ("views", path.join(__dirname, "views"));                 //////////////

// app.use (express.static (path.join(__dirname, "public")));        /////////////
// // use islie likhe taki style apply hone lage (set) likhne se style apply nhi ho rhi. 


// let posts = [   
//     {
//         username:"apnacollege",
//         content:"I love coading"
//     },
//     {
//         username:"ShradhaKhapra",
//         content:"hard work is important to achive suscess"
//     },
//     {
//         username:"rahulkumar",
//         content:"I got selected for 1st internship"
//     },
// ]

// /////////////////////////////////////////////////////////////1
// app.get('/posts', (req, res) => {
//   res.render("index.ejs",{posts})
// })

// /////////////////////////////////////////////////////////////2

// app.get('/posts/new', (req, res) => { // is rout pe request gai hai
//     res.render("new.ejs");       // new form  
// })

// app.post('/posts', (req, res) => { // form submitt hote hi posts request par redirect ho jae
//     let {username, content} = req.body;   // form ka data array me fir se add ho jae
//     posts.push ({username, content});
//     res.send("post request working");
// })

// app.listen(port, () => {
//     console.log(` app listening on port: 3000`)
// })
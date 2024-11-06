const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); // to generate unique id
const methodOverride = require('method-override'); // to send patch request


// Middleware to parse form data 
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data sent by forms
app.use(express.json()); // Parses JSON data

app.use(methodOverride('_method')); // use method override method
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); // Serves static files from the "public" directory

let posts = [
    {
        id:uuidv4(),
        username: "Coder",
        content: "I love coding"
    },
    {
        id:uuidv4(),
        username: "AkshatMishra",
        content: "Hard work is important to achieve success"
    },
    {
        id:uuidv4(),
        username: "OmDwivedi",
        content: "I got selected for my first internship"
    },
];

// Route to render the posts page
app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});

// Route to render the form for creating a new post
app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

// Route to handle form submission
app.post('/posts', (req, res) => {
    let { username, content } = req.body; // create new post
    let id = uuidv4(); // create unique id for each post
    posts.push({ id, username, content });
    res.redirect('/posts'); // Redirects back to the posts page after form submission
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render('show.ejs',{post}); // Redirects back to the posts page after form submission
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params; // Get the id from the request parameters
    let newContent = req.body.content; // Get the new content from the request body
    let post = posts.find((p) => id === p.id); // Find the post by id

    // Update the post's content directly without if-else
    post.content = newContent; // Update the content of the found post
    console.log(post); // Log the updated post to the console
    res.redirect('/posts'); // Redirect back to the posts page
});

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) =>id === p.id);
    res.render('edit.ejs',{post}); // Redirects back to the posts page after form submission
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
        posts = posts.filter((p) =>id !== p.id);
    res.redirect('/posts'); // Redirects back to the posts page after form submission
});


app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});


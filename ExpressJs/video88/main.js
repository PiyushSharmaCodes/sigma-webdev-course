const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory  

// Define a route
app.get('/:slug', (req, res) => {
    const slug = req.params.slug; // Access the slug from the route parameters
    const query = req.query.query; // Access the query parameter (if present)
    
    console.log(req);
    console.log(slug);
    console.log(query); // Log the query parameter

    res.send(`Welcome to my ${slug} page. Query: ${query || 'No query provided'}`);
});
app.get('/', (req, res) => {
  res.send('Hello, World jii!');
});
// app.get('/blog', (req, res) => {
//   res.send('Welcome to my blog bhaisaab');
// });
// app.get('/about', (req, res) => {
//     res.send('About me');
// });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

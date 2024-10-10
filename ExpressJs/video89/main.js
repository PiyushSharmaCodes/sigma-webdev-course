const express = require('express');
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const shops = require('./routes/shops')
app.use('/shops', shops)
app.use('/blog', blog)
app.use(express.static("public"))
// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my Express app.');
  console.log("Get request")
});

app.post('/api/data', (req, res) => {
  const data = {
    message: 'This is some data from the server.'
  };
  res.json(data);
  console.log("Post request")
});
app.get('/index',(req,res)=>{
  res.sendFile('templates/index.html',{root:__dirname})
})
// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});


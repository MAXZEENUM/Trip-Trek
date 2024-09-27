const express = require('express');
const fs = require('fs');
const cors = require('cors'); // เพิ่มบรรทัดนี้เพื่อ import cors
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Sample GET endpoint
app.get('/api', (req, res) => {
  res.send('Hello, World!');
});

app.get('/account', (req, res) => {
  const dataPath = path.join(__dirname, 'account.json'); // ใช้ __dirname เพื่อระบุ path
  const data = fs.readFileSync(dataPath, 'utf8');
  read_port = JSON.parse(data)
  // console.log(read_port);
  res.send(read_port)
});

app.get('/content/post', (req, res) => {
  const dataPath = path.join(__dirname, 'dataPost.json'); // ใช้ __dirname เพื่อระบุ path
  const data_content = fs.readFileSync(dataPath, 'utf8');
  data_post = JSON.parse(data_content)
  console.log("compleat datapost");
  res.send(data_post)
});

app.get('/profile', (req, res) => {
  const dataPath = path.join(__dirname, 'dataprofile.json'); // ใช้ __dirname เพื่อระบุ path
  const data_content = fs.readFileSync(dataPath, 'utf8');
  data_post = JSON.parse(data_content)
  console.log("compleat dataprofile");
  res.send(data_post)
});

// Sample POST endpoint
// app.post('/api/data', (req, res) => {
//   const data = req.body;
//   res.json({ message: 'Data received', data: data });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

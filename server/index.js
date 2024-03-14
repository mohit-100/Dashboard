// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//require('dotenv').config();
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://dashboard-5ubc.vercel.app', // Replace with your frontend domain
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection setup - replace 'your-mongodb-uri' with your MongoDB connection URI
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("MongoDB Connected");
}).catch((err)=>{
  console.log("Error Connecting to MongoDB",err)
}
);



// API endpoint to get data
app.get('/api/data', async (req, res) => {
  try {
    // Access the collection directly and retrieve all documents
    const data = await mongoose.connection.db.collection('datas').find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

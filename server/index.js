// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./model/datashcema')

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin:["https://dashboard-5ubc.vercel.app"],
  methods:["GET"],
  credentials:true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("MongoDB Connected");
}).catch((err)=>{
  console.log("Error Connecting to MongoDB",err)
}
);






app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find({});
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');

// Define the schema for your document
const dataSchema = new mongoose.Schema({
  id: String,
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

// Create a model based on the schema
const data = mongoose.model('data', dataSchema);

module.exports = data;

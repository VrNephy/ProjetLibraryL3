const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  first_name: { type: String },
  family_name: { type: String },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
  name: { type: String },
  lifespan: { type: String },
  url: { type: String },
});

module.exports = mongoose.model('Author', authorSchema);

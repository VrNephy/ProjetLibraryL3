const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String},
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
  summary: { type: String},
  ISBN: { type: mongoose.Schema.Types.ObjectId, ref: 'ISBN' },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre'},
  url: { type: String },
});

module.exports = mongoose.model('Book', bookSchema);

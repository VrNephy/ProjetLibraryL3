const mongoose = require('mongoose');

const bookInstanceSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  imprint: { type: String },
  status: {
    type: String,
    enum: ['Available', 'Unavailable'],
    default: 'Available',
  },
  due_back: { type: Date },
  url: { type: String},

});

module.exports = mongoose.model('BookInstance', bookInstanceSchema);

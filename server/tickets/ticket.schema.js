const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const schema = new Schema({
  // values assigned at insert
  ticket_number: { type: Number } ,
  created: { type: Date, default: Date.now() },
  status: { type: String, default: 'Open' },
  author:
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: { type: String}
  },
  // values from form
  issue: { type: String, required: true },
  description: { type: String, required: true},
  // values added by tech or admin
  tech:
    {
      id: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Tech'
        },
        username: { type: String}
      }
    },
  resolution:
  {
    attempted: { type: Number },
    resolution: { type: String},
    closed: { type: Date}
  }
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Ticket', schema)

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const schema = new Schema({
    author: 
    { 
        id: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
        },
        username: { type: String}
    },
    issue: { type: String, required: true },
    description: { type: String, required: true},
    assigned: 
    {
        ticket_number: { type: Number } ,
        created: { type: Date, default: Date.now() },
        status: { type: String, default: 'Open' },
    },
    resolution: 
    {
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
        attempted: { type: Number },
        resolution: { type: String},
        closed: { type: Date}
    }
})

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Ticket', schema)


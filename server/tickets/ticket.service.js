const db = require('../shared/db')

const Ticket = db.Ticket

module.exports = {
    getAll,
    getById,
    create,
    update,
    hapus
}

// get all the ticket
async function getAll() {
    return await Ticket.find()
}

// get certain ticket
async function getById(id) {
    return await Ticket.findById(id)
}

// creating ticket
// TODO: will add validation user later, also the user ID cant be captured for now, but the schema is ok
async function create(ticketParam) {
    const ticket = new Ticket(ticketParam)
    const check = await Ticket.find().countDocuments()
    if (check === 0 || check === undefined) {
        ticket.ticket_number = 1
    } else {
        const max = await Ticket.find().sort({ "ticket_number": -1 })
        const count = max[0].ticket_number
        ticket.ticket_number = count + 1
    }
    await ticket.save()
}

// update certain ticket
// TODO: validation from user who created the ticket and tech or admin
async function update(id, ticketBody) {
    const ticket = await Ticket.findByIdAndUpdate(id, ticketBody)
    // check status "Open or Closed"
    if(ticketBody.assigned.status === 'Closed'){
        ticket.resolution.closed = Date.now()
    }
    ticket.save()
}

// deleteing certain ticket
// TODO: validation from user who created the ticket and tech or admin
// NOTE: hapus means delete
async function hapus(id) {
    await Ticket.findByIdAndRemove(id)
}
const router = require('express').Router({mergeParams: true})

const ticketService = require('./ticket.service')

// routes
router.get('/', getAll)
router.post('/create', postTicket)
router.get('/:id', getTicket)
router.put('/:id', editTicket)
router.delete('/:id', _deleteTicket)


module.exports = router

function getAll(req, res, next) {
    ticketService.getAll()
        .then(tickets => res.json(tickets))
        .catch(err => next(err))
}

function postTicket(req, res, next) {
    console.log('into controller')
    ticketService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

function getTicket(req, res, next) {
    ticketService.getById(req.params.id)
        .then(ticket => ticket ? res.json(ticket) : res.sendStatus(404))
        .catch(err => next(err))
}

function editTicket(req, res, next) {
    ticketService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

function _deleteTicket(req, res, next) {
    ticketService.hapus(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}

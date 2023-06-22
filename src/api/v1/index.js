import express from "express";
import TicketTypeRequest from "../../pairtest/lib/TicketTypeRequest.js";
import TicketService from "../../pairtest/TicketService.js";
import * as serviceObj from "../../utils/get-objects.js";

const router = express.Router();

// to make the application 
// we put this routes in seprate routes file 
// and put this function in seprate controller file 
// to make the applicaion as as easy for readablity and maintin the code
// for futher development purpose

router.post("/tickets", function (req, res) {
    const seatReservationService = serviceObj.seatReservationService;
    const ticketPaymentService = serviceObj.ticketPaymentService;
    const ticketHelper = serviceObj.ticketHelper;
    const ticketRequests = [];

    try {
        for(let ticketreq of req.body.ticketRequests){
          let newTicketRequest = new TicketTypeRequest(ticketreq.ticketType, parseInt(ticketreq.noOfTickets));
          ticketRequests.push(newTicketRequest);
        }
        const ticketService = new TicketService(seatReservationService, ticketPaymentService, ticketHelper);
        res.send({
          response: ticketService.purchaseTickets(parseInt(req.body.accountid),ticketRequests)
        })
    } catch (err) {
        res.status(500).send({
          error: err.message
        })
    }
})

export default router;

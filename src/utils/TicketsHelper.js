export default class TicketsHelper {

    /*
    ** Check ticket type and determine total price from request
    */
    calculateTotalPriceInPurchase(ticketTypeRequests, totalPrice = 0){
        ticketTypeRequests.forEach(req => {
          if (req.getTicketType() === "ADULT"){
            totalPrice += req.getNoOfTickets() * 20;
          }
          else if (req.getTicketType() === "CHILD"){
            totalPrice += req.getNoOfTickets() * 10;
          };
        })
        return totalPrice;
    }


    /*
    ** Check ticket type and make total seats from request
    */
    doTotalSeatsInPurchase(ticketTypeRequests, totalSeat = 0){
        ticketTypeRequests.forEach(req => {
            if (req.getTicketType() !== "INFANT") {
                totalSeat += req.getNoOfTickets();
            };
        });
        return totalSeat;
    }

    /*
    ** Count the toal number of tickets in the ticket request
    */
    totalTicketsInPurchase(ticketTypeRequests, totalTicket = 0){
        ticketTypeRequests.forEach(req => {
            totalTicket += req.getNoOfTickets();
        });
        return totalTicket;
    };

    /*
    ** Check accountId should be an integer or above
    */
    isAccountIdValid = (accountId) => {
        return Boolean(Number.isInteger(accountId) && Math.sign(accountId > 0));
    }

    /*
    ** Check adult is there in the ticket purchase
    */
    isAdultInPurchase(ticketTypeRequests) {
        if (ticketTypeRequests.some(el => el.getTicketType() === "ADULT" && el.getNoOfTickets() > 0 )) {
            return true;
        };
        return false;
    };

    /*
    ** Adults laps are enough in the purchase for Infant
    */
    enoughAdultInPurchase(ticketTypeRequests, infantsCount = 0, adultsCount = 0) {
        ticketTypeRequests.forEach(req => {
            if (req.getTicketType() === "INFANT") infantsCount += req.getNoOfTickets();
            if (req.getTicketType() === "ADULT") adultsCount += req.getNoOfTickets();
        });
        if (adultsCount < infantsCount) {
            return false;
        };
        return true;
    };

}


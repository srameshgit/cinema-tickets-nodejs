import InvalidPurchaseException from './lib/InvalidPurchaseException.js';

export default class TicketService {
  
  /* constrcutor with creating obejcts by dependency injection */
  constructor (seatReserver, paymentService, ticketHelper){
    this.seatReserver = seatReserver;
    this.paymentService = paymentService;
    this.ticketHelper = ticketHelper;
  }

  /* validate Purchase Request by checking 
    valid account id, adult is there, less than 20 tickets should be there
  */
  validatePurchaseRequest = (accountId, ticketTypeRequests) => {
    return this.validateAccountId(accountId) && 
    this.doCheckAdultIsBeing(ticketTypeRequests) &&
    this.enoughAdultsBeingForInfants(ticketTypeRequests) &&
    this.totalTicketsInPurchase(ticketTypeRequests);        
  };

  /*
  ** Check AccountId is valid or not
  */
  validateAccountId = (accountId) => {
    if (!this.ticketHelper.isAccountIdValid(accountId)) {
      console.log("Error: Account Id is invalid Exception in Ticket Request");
      throw new InvalidPurchaseException("Account Id is invalid");
    };
    return true;
  }

  doCheckAdultIsBeing = (ticketTypeRequests) => {
    if (!this.ticketHelper.isAdultInPurchase(ticketTypeRequests)) {
      console.log("Error: An adult Should be there exception in Ticket request");
      throw new InvalidPurchaseException("An adult Should be there for Tickets");
    } 
    return true;
  }

  enoughAdultsBeingForInfants = (ticketTypeRequests) => {
    if (!this.ticketHelper.enoughAdultInPurchase(ticketTypeRequests)){
      console.log("Error: Infants should sit on an adult lap exception in Ticket request");
      throw new InvalidPurchaseException("infants should sit on an adult lap");
    }
    return true;
  };

  totalTicketsInPurchase = (ticketTypeRequests) => {
    const ticketCount = this.ticketHelper.totalTicketsInPurchase(ticketTypeRequests);
    if( ticketCount > 20){
      console.log("Error: Ticket booking shoule not be more than 20 exception in Ticket request");
      throw new InvalidPurchaseException("Ticket booking shoule not be more than 20");
    };
    
    return ticketCount;
  }

  doTotalSeatsInPurchase = (ticketTypeRequests) => {
    return this.ticketHelper.doTotalSeatsInPurchase(ticketTypeRequests);
  };

  calculateTotalPriceInPurchase = (ticketTypeRequests) => {
    return this.ticketHelper.calculateTotalPriceInPurchase(ticketTypeRequests);
  };


  makePayment = (accountId, totalAmountOfPurchase) => {
    try {
      this.paymentService.makePayment(accountId, totalAmountOfPurchase);  
      console.log("Successful payment");
    } catch (err) {
      console.log("Error in payment: " + err)
      throw new InvalidPurchaseException("payment failure: " + err);
    };
  };


  reserveSeats = (accountId, totalSeatsOfPurchase) => {
    try {
      this.seatReserver.reserveSeat(accountId, totalSeatsOfPurchase);
      console.log("Successful booking");
    } catch (err) {
      console.log("Error in Seat booking:" + err);
      throw new InvalidPurchaseException("seat booking failure: " + err);
    };
  };

  purchaseTickets(accountId, ...ticketTypeRequests) {
    try {
      this.validatePurchaseRequest(accountId, ...ticketTypeRequests);
      const totalAmountOfPurchase = this.calculateTotalPriceInPurchase(...ticketTypeRequests);
      const totalSeatsOfPurchase = this.doTotalSeatsInPurchase(...ticketTypeRequests);

      this.makePayment(accountId, totalAmountOfPurchase);
      this.reserveSeats(accountId, totalSeatsOfPurchase);
    
      console.log("Booking successful");
      return "Booking successful"
      
    } catch (err) {
      throw new InvalidPurchaseException("Error during booking: " + err);
    }; 
  }
}

import TicketHelper from "../utils/TicketsHelper.js";
import TicketPaymentService from "../thirdparty/paymentgateway/TicketPaymentService.js";
import SeatReservationService from "../thirdparty/seatbooking/SeatReservationService.js";

export const seatReservationService = new SeatReservationService();
export const ticketPaymentService = new TicketPaymentService();
export const ticketHelper = new TicketHelper();

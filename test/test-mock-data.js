import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest.js";

export const testRequestAdult =  new TicketTypeRequest("ADULT", 1);
export const testRequestChild = new TicketTypeRequest("CHILD", 2);
export const testRequestInfant =  new TicketTypeRequest("INFANT",1);
export const testRequestTwenty = new TicketTypeRequest("ADULT", 20);
export const testRequestManyInfants = new TicketTypeRequest("INFANT",9);

export const testGoodAccountId = 1200;
export const testBadAccountId = "FOO23";

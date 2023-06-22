import TicketPaymentService from "./TicketPaymentService.js";
describe("TicketPaymentService", () => {
    const ticketPaymentService = new TicketPaymentService();

    test("ticketPaymentService is exists and defined", () => {
        expect(ticketPaymentService).toBeDefined();
    });

    describe("TicketPaymentService", () => {
        test("test for accountId is not integer", () => {
            expect(() => {
                ticketPaymentService.makePayment("898", 40)
            }).toThrow(new TypeError("accountId must be an integer"));
        });
    
        test("test for accountId is undefined", () => {
            expect(() => {
                ticketPaymentService.makePayment(undefined, 40)
            }).toThrow(new TypeError("accountId must be an integer"));
        });
    
        test("test for accountId is null", () => {
            expect(() => {
                ticketPaymentService.makePayment(null, 40)
            }).toThrow(new TypeError("accountId must be an integer"));
        });
    
        test("test for total amount should not integer", () => {
            expect(() => {
                ticketPaymentService.makePayment(898, "TEST VALUE")
            }).toThrow(new TypeError("totalAmountToPay must be an integer"));
        });
    
        test("test for total amount is zero", () => {
            expect(() => {
                ticketPaymentService.makePayment(898, 0)
            }).not.toThrow(new TypeError("totalAmountToPay must be an integer"));
        });
    
        test("test for total amount is negative", () => {
            expect(() => {
                ticketPaymentService.makePayment(898, -1)
            }).not.toThrow(new TypeError("totalAmountToPay must be an integer"));
        });
    
        test("test for accountId is zero", () => {
            expect(() => {
                ticketPaymentService.makePayment(0, 2);
            }).not.toThrow(new TypeError("accountId must be an integer"));
        });
    
        test("test for accountId is negative value", () => {
            expect(() => {
                ticketPaymentService.makePayment(-1, 2);
            }).not.toThrow(new TypeError("accountId must be an integer"));
        }); 
    });
})

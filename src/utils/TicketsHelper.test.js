import * as serviceObj from "../utils/get-objects.js";
import * as testMockData from "../../test/test-mock-data.js";

describe("TicketsHelper", () => {
    const ticketHelper = serviceObj.ticketHelper;
    
    test("TicketsHelper should exist", () => {
        expect(ticketHelper).toBeDefined();
    });

    describe("isAccountIdValid", () => {
        test("it should be a method and to be defined to test", () => {
            expect(ticketHelper.isAccountIdValid).toBeDefined();
        });

        test("it should return false if accountId is zero", () => {
            const result = ticketHelper.isAccountIdValid(0);
            expect(result).toBe(false);
        });

        test("it should return false if accountId is negative", () => {
            const result = ticketHelper.isAccountIdValid(-123);
            expect(result).toBe(false);
        });

        test("it should return false if accountId alpha char", () => {
            const result = ticketHelper.isAccountIdValid('testfoo');
            expect(result).toBe(false);
        }); 

        test("it should return true if accountId is a integer", () => {
            const result = ticketHelper.isAccountIdValid(123);
            expect(result).toBe(true);
        }); 
    });

    describe("isAdultInPurchase", () => {
        test("it should be a method and to be defined to test", () => {
            expect(ticketHelper.isAdultInPurchase).toBeDefined();
        });

        test("it should return true if adult is there in purchase", () => {
            const result = ticketHelper.isAdultInPurchase([testMockData.testRequestAdult, testMockData.testRequestChild, testMockData.testRequestInfant]);
            expect(result).toBe(true);
        });

        test("it should return false if no adult is not there in purchase", () => {
            const result = ticketHelper.isAdultInPurchase([testMockData.testRequestChild, testMockData.testRequestInfant]);
            expect(result).toBe(false);
        }); 

        test("it should return false if no adult and only child is there in purchase", () => {
            const result = ticketHelper.isAdultInPurchase([testMockData.testRequestChild]);
            expect(result).toBe(false);
        }); 
    });

    describe("enoughAdultInPurchase", () => {
        test("it should be a method and to be defined to test", () => {
            expect(ticketHelper.enoughAdultInPurchase).toBeDefined();
        });

        test("it should return true if enough adults are present", () => {
            const result = ticketHelper.enoughAdultInPurchase([testMockData.testRequestAdult, testMockData.testRequestChild, testMockData.testRequestInfant]);
            expect(result).toBe(true);
        });

        test("it should return false if not enough adults are present", () => {
            const result = ticketHelper.enoughAdultInPurchase([testMockData.testRequestAdult, testMockData.testRequestChild, testMockData.testRequestManyInfants]);
            expect(result).toBe(false);
        });  
   });

    describe("totalTicketsInPurchase", () => {
        test("it should be a method and to be defined to test", () => {
            expect(ticketHelper.totalTicketsInPurchase).toBeDefined();
        });
        
        test("it should count all ticket types within the total count", () => {
            const result = ticketHelper.totalTicketsInPurchase([testMockData.testRequestAdult,testMockData.testRequestChild,testMockData.testRequestInfant]);
            expect(result).toEqual(4);
        });
    });


    describe("doTotalSeatsInPurchase", () => {
        test("it should be a method and to be defined to test", () => {
            expect(ticketHelper.doTotalSeatsInPurchase).toBeDefined();
        });
        
        test("it should count only adult and child tickets in seat count", () => {
            const result = ticketHelper.doTotalSeatsInPurchase([testMockData.testRequestAdult,testMockData.testRequestChild,testMockData.testRequestInfant]);
            expect(result).toEqual(3);
        });
    });

    describe("calculateTotalPriceInPurchase", () => {
        test("it should be a method and to be defined to test", () => {
            expect(ticketHelper.calculateTotalPriceInPurchase).toBeDefined();
        });

        test("it should calculate the total price of adult ticket from request", () => {
            const result = ticketHelper.calculateTotalPriceInPurchase([testMockData.testRequestAdult]);
            expect(result).toEqual(20);
        });

        test("it should calculate the total price of child ticket from request", () => {
            const result = ticketHelper.calculateTotalPriceInPurchase([testMockData.testRequestChild]);
            expect(result).toEqual(20); 
        });

        test("it should calculate the total price of infant ticket from request", () => {
            const result = ticketHelper.calculateTotalPriceInPurchase([testMockData.testRequestInfant]);
            expect(result).toEqual(0); 
        });

        test("it should calculate the total price of all ticket types from request", () => {
            const result = ticketHelper.calculateTotalPriceInPurchase([testMockData.testRequestAdult, testMockData.testRequestChild, testMockData.testRequestInfant]);
            expect(result).toEqual(40);
        });
    });

})


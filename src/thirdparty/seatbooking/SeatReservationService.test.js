import SeatReservationService from "./SeatReservationService.js";
describe("SeatReservationService", () => {
    const seatReservationService = new SeatReservationService();
    test("seatReservationService is exists and defined", () => {
        expect(seatReservationService).toBeDefined();
    });

    test("test for accountId should not an integer", () => {
        expect(() => {
            seatReservationService.reserveSeat("644", 2);
        }).toThrow(new TypeError("accountId must be an integer"));
    })

    test("test for no of seats not an integer", () => {
        expect(() => {
            seatReservationService.reserveSeat(331, "FIVE");
        }).toThrow(new TypeError("totalSeatsToAllocate must be an integer"));
    });

    test("test for accountId is 0", () => {
        expect(() => {
            seatReservationService.reserveSeat(0, 2);
        }).not.toThrow(new TypeError("accountId must be an integer"));
    });

    test("test for accountId is negative integer", () => {
        expect(() => {
            seatReservationService.reserveSeat(-1, 2);
        }).not.toThrow(new TypeError("accountId must be an integer"));
    });

    test("test for correct format reservation request", () => {
        expect(() => {
            seatReservationService.reserveSeat(345, 3)
        }).not.toThrow()
    })

    test("test for no of seats is zero", () => {
        expect(() => {
            seatReservationService.reserveSeat(674, 0);
        }).not.toThrow(new TypeError("totalSeatsToAllocate must be an integer"));
    });
    
    test("test for no of seats is negative", () => {
        expect(() => {
            seatReservationService.reserveSeat(587, -1);
        }).not.toThrow(new TypeError("totalSeatsToAllocate must be an integer"));
    });
});

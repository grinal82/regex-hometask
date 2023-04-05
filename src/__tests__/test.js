const Validator = require("../index");

describe("Validator", () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    describe("validateUsername", () => {
        it("should return true for a valid username", () => {
            expect(validator.validateUsername("john-doe123")).toBe(false);
            expect(validator.validateUsername("jane-doe")).toBe(true);
            expect(validator.validateUsername("johndoe")).toBe(true);
        });

        it("should return false for a username with consecutive digits", () => {
            expect(validator.validateUsername("johndoe4567")).toBe(false);
        });

        it("should return false for a username starting with a symbol", () => {
            expect(validator.validateUsername("-johndoe")).toBe(false);
            expect(validator.validateUsername("_johndoe")).toBe(false);
        });

        it("should return false for a username ending with a symbol", () => {
            expect(validator.validateUsername("johndoe-")).toBe(false);
            expect(validator.validateUsername("johndoe_")).toBe(false);
        });

        it("should return false for a username containing invalid characters", () => {
            expect(validator.validateUsername("john@doe")).toBe(false);
        });
    });
});

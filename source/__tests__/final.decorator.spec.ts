
import { final } from "../decorators";
import { randomUUID, UUID } from "crypto";

describe("**/** Final decorator specifications **/**", () => {

    var uuid: UUID;

    beforeEach(() => uuid = randomUUID());

    @final
    class FinalClass {
        someMethod =() => {
            return uuid;
        }
    }
    
    class SubClass extends FinalClass {}

    it("should allow creating an instance of the final class", () => {
        const instance = new FinalClass();
        expect(instance.someMethod()).toBe(uuid);
    });

    it("should throw an error when attempting to extend a final class", () => {
        expect(() => {
            new SubClass();
        }).toThrowError("Cannot inherit from final class");
    });

});
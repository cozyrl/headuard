
import { Headuard } from "../headuard";
import { HeadElement } from "../types"
import { randomUUID } from "crypto";
import { globalAttributes } from "../utilities";

describe("**/** Global attributes specifications **/**", () => {

    var tag: HeadElement;
    var textContent: string;
    var conflict: jest.SpyInstance;

    beforeEach(() => {
        conflict = jest.spyOn(console, "debug").mockImplementation()
        textContent = randomUUID();
    });

    afterEach(() => conflict.mockRestore());

    it("must be able to apply global attributes to a title tag without conflict.", () => {
        const attributes = Object.assign({ textContent }, globalAttributes);
        tag = Headuard.createTitle(attributes);

        for (const [key, value] of Object.entries(attributes)) {
            (tag as any)[key] = value;
            expect((tag as any)[key]).toBe(value);
            
        }
      
        expect(conflict).toHaveBeenCalledTimes(0);
    });


    it("must be able to apply global attributes to a base tag without conflict.", () => {
        tag = Headuard.createBase(globalAttributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (tag as any)[key] = value;
            expect((tag as any)[key]).toBe(value);
        }
      
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to apply global attributes to a meta tag without conflict.", () => {
        tag = Headuard.createMeta(globalAttributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (tag as any)[key] = value;
            expect((tag as any)[key]).toBe(value);
        }
      
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to apply global attributes to a script tag without conflict.", () => {
        const attributes = Object.assign({}, globalAttributes);
        tag = Headuard.createScript(attributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (tag as any)[key] = value;
            expect((tag as any)[key]).toBe(value);
        }
      
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to apply global attributes to a link tag without conflict.", () => {
        const attributes = Object.assign({}, globalAttributes);
        tag = Headuard.createLink(attributes);

        for (const [key, value] of Object.entries(globalAttributes)) {
            (tag as any)[key] = value;
            expect((tag as any)[key]).toBe(value);
        }
      
        expect(conflict).toHaveBeenCalledTimes(0);
    });

});
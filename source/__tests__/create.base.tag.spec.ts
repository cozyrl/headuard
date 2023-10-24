
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Create base tag specifications **/**", () => {

    var tag: HTMLBaseElement;
    var conflict: jest.SpyInstance;

    beforeEach(() => conflict = jest.spyOn(console, "debug").mockImplementation());

    afterEach(() => conflict.mockRestore());

    it("must be able to create a base tag element without conflict.", () => {
        tag = Headuard.createBase({});

        expect(tag.tagName).toBe("BASE");
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a base tag element whose href attribute is defined without conflict.", () => {
        const href = `http://localhost/${randomUUID()}`;
        tag = Headuard.createBase({ href });
 
        expect(tag.tagName).toBe("BASE");
        expect(tag.href).toBe(href);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a base tag element with the target attribute set to _self without conflict.", () => {
        const target = "_self";
        tag = Headuard.createBase({ target });

        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a base tag element with the target attribute set to _blank without conflict.", () => {
        const target = "_blank";
        tag = Headuard.createBase({ target });

        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a base tag element with the target attribute set to _parent without conflict.", () => {
        const target = "_parent";
        tag = Headuard.createBase({ target });
        
        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a base tag element with the target attribute set to _top without conflict.", () => {
        const target = "_top";
        tag = Headuard.createBase({ target });
        
        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

});
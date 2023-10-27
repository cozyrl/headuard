
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Create base tag specifications **/**", () => {

    var tag: HTMLBaseElement;

    it("must be able to create a base tag element without conflict.", () => {
        tag = Headuard.createBase({});
        expect(tag.tagName).toBe("BASE");
    });

    it("must be able to create a base tag element whose href attribute is defined.", () => {
        const href = `http://localhost/${randomUUID()}`;
        tag = Headuard.createBase({ href });
 
        expect(tag.tagName).toBe("BASE");
        expect(tag.href).toBe(href);
    });

    it("must be able to create a base tag element with the target attribute set to _self.", () => {
        const target = "_self";
        tag = Headuard.createBase({ target });

        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
    });

    it("must be able to create a base tag element with the target attribute set to _blank.", () => {
        const target = "_blank";
        tag = Headuard.createBase({ target });

        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
    });

    it("must be able to create a base tag element with the target attribute set to _parent.", () => {
        const target = "_parent";
        tag = Headuard.createBase({ target });
        
        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
    });

    it("must be able to create a base tag element with the target attribute set to _top.", () => {
        const target = "_top";
        tag = Headuard.createBase({ target });
        
        expect(tag.tagName).toBe("BASE");
        expect(tag.target).toBe(target);
    });

});
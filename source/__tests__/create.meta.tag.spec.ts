
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Create title tag specifications **/**", () => {

    var tag: HTMLMetaElement;
    var conflict: jest.SpyInstance;

    beforeEach(() => conflict = jest.spyOn(console, "debug").mockImplementation());

    afterEach(() => conflict.mockRestore());

    it("must be able to create a meta tag element without conflict.", () => {
        tag = Headuard.createMeta({});

        expect(tag.tagName).toBe("META");
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a meta tag element whose charset attribute is defined without conflict.", () => {
        const charset = randomUUID();
        tag = Headuard.createMeta({ charset });
 
        expect(tag.tagName).toBe("META");
        expect(tag.getAttribute("charset")).toBe(charset);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a meta tag element whose name attribute is defined without conflict.", () => {
        const name = randomUUID();
        tag = Headuard.createMeta({ name });
 
        expect(tag.tagName).toBe("META");
        expect(tag.name).toBe(name);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a meta tag element whose content attribute is defined without conflict.", () => {
        const content = randomUUID();
        tag = Headuard.createMeta({ content });
 
        expect(tag.tagName).toBe("META");
        expect(tag.content).toBe(content);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a meta tag element with the httpEquiv attribute set to content-security-policy without conflict.", () => {
        const httpEquiv = "content-security-policy";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

    it("must be able to create a meta tag element with the httpEquiv attribute set to content-type without conflict.", () => {
        const httpEquiv = "content-type";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
        expect(conflict).toHaveBeenCalledTimes(0);
    });


    it("must be able to create a meta tag element with the httpEquiv attribute set to default-style without conflict.", () => {
        const httpEquiv = "default-style";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
        expect(conflict).toHaveBeenCalledTimes(0);
    });


    it("must be able to create a meta tag element with the httpEquiv attribute set to x-ua-compatible without conflict.", () => {
        const httpEquiv = "x-ua-compatible";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

});
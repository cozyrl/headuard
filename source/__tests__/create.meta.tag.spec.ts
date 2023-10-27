
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Create title tag specifications **/**", () => {

    var tag: HTMLMetaElement;

    it("must be able to create a meta tag element.", () => {
        tag = Headuard.createMeta({});
        expect(tag.tagName).toBe("META");
    });

    it("must be able to create a meta tag element whose charset attribute is defined.", () => {
        const charset = randomUUID();
        tag = Headuard.createMeta({ charset });
 
        expect(tag.tagName).toBe("META");
        expect(tag.getAttribute("charset")).toBe(charset);
    });

    it("must be able to create a meta tag element whose name attribute is defined.", () => {
        const name = randomUUID();
        tag = Headuard.createMeta({ name });
 
        expect(tag.tagName).toBe("META");
        expect(tag.name).toBe(name);
    });

    it("must be able to create a meta tag element whose content attribute is defined.", () => {
        const content = randomUUID();
        tag = Headuard.createMeta({ content });
 
        expect(tag.tagName).toBe("META");
        expect(tag.content).toBe(content);
    });

    it("must be able to create a meta tag element with the httpEquiv attribute set to content-security-policy.", () => {
        const httpEquiv = "content-security-policy";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
    });

    it("must be able to create a meta tag element with the httpEquiv attribute set to content-type.", () => {
        const httpEquiv = "content-type";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
    });


    it("must be able to create a meta tag element with the httpEquiv attribute set to default-style.", () => {
        const httpEquiv = "default-style";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
    });


    it("must be able to create a meta tag element with the httpEquiv attribute set to x-ua-compatible.", () => {
        const httpEquiv = "x-ua-compatible";
        tag = Headuard.createMeta({ httpEquiv });
        
        expect(tag.tagName).toBe("META");
        expect(tag.httpEquiv).toBe(httpEquiv);
    });

});
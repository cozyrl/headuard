import { DocumentHead } from "../document.head";
import { randomUUID } from "crypto";

describe("** Script tag (specs) **", () => {

    var mounted: HTMLMetaElement;

    it("should be able to mount an meta element", () => {
        mounted = DocumentHead.createMeta({});
        expect(mounted.tagName).toBe("META");
    });

    it("should be able to mount an meta element with charset", () => {
        const charset = randomUUID();
        mounted = DocumentHead.createMeta({ charset });
 
        expect(mounted.tagName).toBe("META");
        expect(mounted.getAttribute("charset")).toBe(charset);
    });

    it("should be able to mount an meta element with name", () => {
        const name = randomUUID();
        mounted = DocumentHead.createMeta({ name });
 
        expect(mounted.tagName).toBe("META");
        expect(mounted.name).toBe(name);
    });

    it("should be able to mount an meta element with content", () => {
        const content = randomUUID();
        mounted = DocumentHead.createMeta({ content });
 
        expect(mounted.tagName).toBe("META");
        expect(mounted.content).toBe(content);
    });

    it("should be able to mount a meta element whose http-equiv is set to content-security-policy", () => {
        const httpEquiv = "content-security-policy";
        mounted = DocumentHead.createMeta({ httpEquiv });
        
        expect(mounted.tagName).toBe("META");
        expect(mounted.httpEquiv).toBe(httpEquiv);
    });

    it("should be able to mount a meta element whose http-equiv is set to content-type", () => {
        const httpEquiv = "content-type";
        mounted = DocumentHead.createMeta({ httpEquiv });
        
        expect(mounted.tagName).toBe("META");
        expect(mounted.httpEquiv).toBe(httpEquiv);
    });

    it("should be able to mount a meta element whose http-equiv is set to default-style", () => {
        const httpEquiv = "default-style";
        mounted = DocumentHead.createMeta({ httpEquiv });
        
        expect(mounted.tagName).toBe("META");
        expect(mounted.httpEquiv).toBe(httpEquiv);
    });

    it("should be able to mount a meta element whose http-equiv is set to x-ua-compatible", () => {
        const httpEquiv = "x-ua-compatible";
        mounted = DocumentHead.createMeta({ httpEquiv });
        
        expect(mounted.tagName).toBe("META");
        expect(mounted.httpEquiv).toBe(httpEquiv);
    });
});
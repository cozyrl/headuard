
import { DocumentHead } from "../document.head";
import { randomUUID } from "crypto";

describe("** DocumentHead (specs) **", () => {

    it("should be able to mount", () => {
        expect(typeof DocumentHead.mount === "function").toBeTruthy();

    });

    it("should be able to unmount", () => {
        expect(typeof DocumentHead.unmount === "function").toBeTruthy();
    });

    it("should be able to mount an title element with text content", () => {
        const title = randomUUID();
        const titleElement = DocumentHead.createTitle({ title });
        

        expect(titleElement.tagName).toBe("TITLE");
        expect(titleElement.textContent).toBe(title);
    });

    it("should be able to unmount an title element", () => {
        const title = randomUUID();

        // Mount title tag
        const titleElement = DocumentHead.createTitle({ title });

        // Unmount title tag
        DocumentHead.unmount(titleElement);

        expect(document.head.contains(titleElement)).toBe(false);
    });

    it("should be able to mount an base element with target and href", () => {
        const href = `http://localhost/${randomUUID()}`;
        const target = randomUUID();
        const titleElement = DocumentHead.createBase({ href, target });
        

        expect(titleElement.tagName).toBe("BASE");
        expect(titleElement.target).toBe(target);
        expect(titleElement.href).toBe(href);
    });

    it("should be able to mount an base element only with target", () => {
        const target = randomUUID();
        const titleElement = DocumentHead.createBase({ target });
        

        expect(titleElement.tagName).toBe("BASE");
        expect(titleElement.target).toBe(target);
        expect(titleElement.href).toBe("http://localhost/");
    });

    it("should be able to mount an base element only with href", () => {
        const href = `http://localhost/${randomUUID()}`;
        const titleElement = DocumentHead.createBase({ href });
        

        expect(titleElement.tagName).toBe("BASE");
        expect(titleElement.href).toBe(href);
        expect(titleElement.target).toBe("");
    });

});
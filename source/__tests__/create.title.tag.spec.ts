
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Create title tag specifications **/**", () => {

    var tag: HTMLTitleElement;

    it("must be able to create a title tag element with required attribute.", () => {
        const textContent = randomUUID();
        tag = Headuard.createTitle({ textContent });

        expect(tag.tagName).toBe("TITLE");
        expect(tag.textContent).toBe(textContent);
    });

});
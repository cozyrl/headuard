
import { Headuard } from "../headuard";
import { randomUUID } from "crypto";

describe("**/** Create title tag specifications **/**", () => {

    var tag: HTMLTitleElement;
    var conflict: jest.SpyInstance;

    beforeEach(() => conflict = jest.spyOn(console, "debug").mockImplementation());

    afterEach(() => conflict.mockRestore());

    it("must be able to create a title tag element with required attributes without conflict.", () => {
        const textContent = randomUUID();
        tag = Headuard.createTitle({ textContent });

        expect(tag.tagName).toBe("TITLE");
        expect(tag.textContent).toBe(textContent);
        expect(conflict).toHaveBeenCalledTimes(0);
    });

});
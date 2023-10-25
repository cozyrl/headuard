
/**
    * Makes a class final, preventing it from being inherited.
    * @template T - The constructor type.
    * @param target - The constructor function of the class.
    * @returns The modified constructor function that cannot be inherited from.
    * @throws Throws an error if the class is attempted to be inherited.
*/

export function final<T extends { new (...args: any[]): object }>(target: T): T {
    return class Final extends target {

        /**
            * Creates an instance of the final class.
            * @param args - Arguments passed to the constructor.
            * @throws Throws an error if the class is attempted to be inherited.
        */

        constructor(...args: any[]) {
            const cannotInherit = "Cannot inherit from final class";
            if(new.target !== Final) throw new Error(cannotInherit);
            super(...args);
        }
    };
}
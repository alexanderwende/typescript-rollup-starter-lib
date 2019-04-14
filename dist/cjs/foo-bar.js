"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = require("./foo");
/**
 * The FooBar class
 */
class FooBar extends foo_1.Foo {
    constructor(name = 'FooBar') {
        super(name);
        this.name = name;
    }
    /**
     * Let the foobar greet
     *
     * @returns The greeting
     */
    greet() {
        return `Hey ${this.name}!`;
    }
}
exports.FooBar = FooBar;
//# sourceMappingURL=foo-bar.js.map
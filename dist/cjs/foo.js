"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Foo class
 */
class Foo {
    constructor(name = 'Foo') {
        this.name = name;
    }
    /**
     * Let the foo greet
     *
     * @returns The greeting
     */
    greet() {
        return `Hello ${this.name}!`;
    }
}
exports.Foo = Foo;
//# sourceMappingURL=foo.js.map
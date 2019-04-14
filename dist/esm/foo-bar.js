import { Foo } from './foo';
/**
 * The FooBar class
 */
export class FooBar extends Foo {
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
//# sourceMappingURL=foo-bar.js.map
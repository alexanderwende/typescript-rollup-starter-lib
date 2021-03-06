import { Foo } from './foo';

/**
 * The FooBar class
 */
export class FooBar extends Foo {

    constructor (public name: string = 'FooBar') {

        super(name);
    }

    /**
     * Let the foobar greet
     *
     * @returns The greeting
     */
    greet (): string {

        return `Hey ${ this.name }!`
    }
}

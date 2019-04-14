/**
 * The Foo class
 */
export class Foo {

    constructor (public name: string = 'Foo') { }

    /**
     * Let the foo greet
     *
     * @returns The greeting
     */
    greet (): string {

        return `Hello ${ this.name }!`;
    }
}

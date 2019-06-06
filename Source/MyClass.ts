///<reference path="TimeProvider.ts"/>

class MyClass {
    /**
     * So much stuff to write and document!!!
     */
    public getMessage(): string {
        const provider = new TimeProvider();

        return `Hello TypeScript the time is currently ${provider.getTime()}`;
    }
}

class MyClass {
    /**
     * So much stuff to write and document!!!
     */
    public getMessage(): string {
        let provider = new TimeProvider();

        let out = 'Hello TypeScript the time is currently ' + provider.getTime();

        return out;
    }
}

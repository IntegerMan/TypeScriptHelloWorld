///<reference path="TimeProvider.ts"/>
///<reference path="SampleContext.ts"/>
///<reference path="TemplateManager.ts"/>

class MyClass {
    /**
     * So much stuff to write and document!!!
     */
    public getMessage(): string {
        const provider = new TimeProvider();

        const context = new SampleContext();
        context.title = 'Hello Handlebared TypeScript';
        context.message = `The time is currently: '${provider.getTime()}'. Better get coding.`;

        const compiler = new TemplateManager();

        return compiler.applyHandlebarsTemplateById('sample-template', context);
    }
}

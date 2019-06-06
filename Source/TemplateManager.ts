let Handlebars: any;

class TemplateManager {
    public applyHandlebarsTemplateById(templateId: string, context: object): string {
        const elementById = document.getElementById(templateId);

        if (!elementById) {
            throw new Error(`Could not find template with id ${templateId}`);
        }

        if (!context) {
            throw new Error(`No context object provided for template ${templateId}`);
        }

        console.log('Finding template', templateId);

        const template = elementById.innerHTML;

        return this.applyHandlebarsTemplate(template, context);
    }

    public applyHandlebarsTemplate(template: string, context: object): string {
        console.log('Processing template for context', template, context);

        if (!template) {
            throw new Error(`No template provided`);
        }

        const compiled = Handlebars.compile(template);

        if (!context) {
            throw new Error(`No context object provided for template ${template}`);
        }

        const html = compiled(context);

        console.log('Compiled HTML', html);

        return html;
    }
}

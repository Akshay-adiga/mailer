const handlebars = require('handlebars');
const fs = require('fs');
/** Creates template for the given template name with provided data.
 * @param {object} data data used to compile the handlebar.
 * @param {string} templateName   template to use for compiling(should be present at ./templates folder.)
 */

async function createTemplate(data, templateName) {
    try {
        const file = fs.readFileSync(`./templates/${templateName}.html`)
        const html = Buffer.from(file, 'base64').toString('ascii');
        const template = handlebars.compile(html);
        const res = template(data);
        return res;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { createTemplate }
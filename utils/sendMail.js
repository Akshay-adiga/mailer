const { createTemplate } = require('./createTemplates');
const { mailer } = require('./mailer');

async function sendMail(request) {
    try {
        if (request.template) {
            const html = await exports.createTemplate(request.content, request.template);
            console.log(html)
            request.html = html;
        }
        const res = await exports.mailer(request);
        return res;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { sendMail, createTemplate,  mailer }
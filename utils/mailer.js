const nodemailer = require("nodemailer");

/** Sends email for specific user(s).
 * @param {Object} data mail object.
 * @param {Array} data.to recipents address.
 * @param {string} data.subject subject of the email.
 * @param {string=} data.text plain text for the email body.
 * @param {string=} data.html embeded html for the email body.
 */

async function mailer(data) {
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER_NAME, // generated ethereal user
                pass: process.env.GMAIL_USER_PASSWORD // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Akshay 👻" <foo@example.com>', // sender address
            to: data.to, // list of receivers
            subject: data.subject, // Subject line
            text: data.text ? data.text : undefined, // plain text body
            html: data.html ? data.html : undefined // html body
        });
        return {
            success: true,
            messageId: info.messageId
        }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { mailer }
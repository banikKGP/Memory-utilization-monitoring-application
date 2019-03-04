const nodemailer = require('nodemailer');

async function main() {

    let account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'camilla.cummerata@ethereal.email',
            pass: 'Ehw3kwseXGkT8adH2r'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'itsmylife.srb@gmail.com', // sender address
        to: "itsmylife.srb@gmail.com", // list of receivers
        subject: "[WARNING] high usage of memory", // Subject line
        html: "<b>Memory utilisation is at its peak.</b>" // html body
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions)

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

var notifyUser = function () {
    main().catch(console.error);
}

module.exports = {
    notifyUser
}
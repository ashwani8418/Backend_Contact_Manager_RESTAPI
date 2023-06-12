const nodemailer = require("nodemailer");

const sendmail = async (req, res) => {
  

let testAccount = await nodemailer.createTestAccount();

  let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ansel.glover8@ethereal.email',
        pass: 'xujkX54BN1mEUrTtYF'
    }
});

let info = await transporter.sendMail({
    from : ' "Ashwani Sharma 😒" <aansel.glover8@ethereal.email>',
    to: "sh.ashwani94@gmail.com, deepupepsi09@gmail.com",
    subject : "Hello Testing email sending",
    text: "Hello World",
    html : "<div> Hello World </div>"
});

console.log("Message sent: %s", info.messageId);

  res.json(info)
};

module.exports = sendmail;

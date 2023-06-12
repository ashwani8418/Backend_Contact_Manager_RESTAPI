const nodemailer = require("nodemailer");

/*** send mail from testing mail account */
const signup = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Registered ✔", // Subject line
    text: "Successfully Registered with us", // plain text body
    html: "<b> Successfully Registered with us</b>", // html body
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "you should receive an email !",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  //    res.status(201).json("Signup Successfully!...");
};


/*** send mail from real gmail account */
const getbill = (req, res) => {

    let config = {
        auth : {
            user : "",
            pass : ""
        }
    }
    let transporter = nodemailer.createTransport(config);
  res.status(201).json("getBill Successfully!...");
};

module.exports = { signup, getbill };

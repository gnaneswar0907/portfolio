const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log("We are live on port 4444");
});

app.post("/api/sendMail", (req, res) => {
  const data = req.body;
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "asish.gnan@gmail.com",
      pass: "ashishGNANESWAR1!"
    }
  });
  var mailOptions = {
    from: data.email,
    to: "asish.gnan2@gmail.com",
    subject: data.subject,
    html: `<h2>${data.name}</h2>
            <div>${data.message}</div>`
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});

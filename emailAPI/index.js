const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

const port = process.env.PORT;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log("We are live");
});

app.post("/api/sendMail", (req, res) => {
  const data = req.body;
  sgMail
    .send({
      to: "asish.gnan2@gmail.com",
      from: data.email,
      subject: data.subject,
      text: data.message
    })
    .then(() => res.send("Success"))
    .catch(error => res.send(error));
});

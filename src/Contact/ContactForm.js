import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import axios from "axios";

import "./ContactForm.css";
import Footer from "../Footer";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false });
  const [messageSent, toggleMesaageSent] = useState(false);

  const clearFormValues = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name,
      email,
      subject,
      message
    };
    axios
      .post("http://localhost:4444/api/sendMail", formData)
      .then(res => {
        clearFormValues();
        toggleMesaageSent(true);
      })
      .catch(() => {
        console.log("not sent");
      });
  };

  const checkValid = property => {
    if (property === "name") {
      if (name === "") {
        setErrors({ ...errors, name: true });
      } else {
        setErrors({ ...errors, name: false });
      }
    } else {
      if (email === "") {
        setErrors({ ...errors, email: true });
      } else {
        setErrors({ ...errors, email: false });
      }
    }
  };

  const classes = useStyles();

  return (
    <div style={{ paddingBottom: "100px", position: "relative" }}>
      <form className="ContactForm" onSubmit={handleSubmit}>
        <TextField
          className="InputField"
          onBlur={() => checkValid("name")}
          error={errors.name}
          label="Name"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <TextField
          className="InputField"
          error={errors.email}
          onBlur={() => checkValid("email")}
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          className="InputField"
          label="Subject"
          margin="normal"
          variant="outlined"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <TextField
          className="InputField"
          rows={10}
          label="Message"
          margin="normal"
          variant="outlined"
          multiline
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit" className="SubmitButton">
          SEND
        </button>
        {messageSent && (
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={messageSent}
            autoHideDuration={3000}
            onClose={() => toggleMesaageSent(false)}
            ContentProps={{
              "aria-describedby": "message-id",
              style: {
                backgroundColor: "#4BB543"
              }
            }}
            message={<span id="message-id">Message Sent</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={() => toggleMesaageSent(false)}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
        )}
      </form>
      <Footer />
    </div>
  );
};

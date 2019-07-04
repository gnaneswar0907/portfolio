import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./ContactForm.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false });

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
    console.log(formData);
    clearFormValues();
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

  return (
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
      <div>
        <button type="submit" className="SubmitButton">
          SEND
        </button>
      </div>
    </form>
  );
};

import React, { useState } from "react";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import PageHeader from "../components/page-header";
import personalData from "../utils/personal-data";

const Contact = () => {
  const { items } = personalData;
  //   ---------- Solution 1 >
  //   const contact_items = items.filter(
  //     (i) =>
  //       i.title.toLowerCase() === "address" ||
  //       i.title.toLowerCase() === "phone" ||
  //       i.title.toLowerCase() === "email"
  //   );
  //   ---------- Solution 2 >
  const titlesToFilter = ["address", "phone", "email"];
  const contact_items = items.filter((item) =>
    titlesToFilter.includes(item.title.toLowerCase())
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
    }

    setErrors(validationErrors);
  };

  /*
    The regular expression /^\S+@\S+\.\S+$/ is used for validating email addresses. Here's what each part of the expression means:

    ^: Asserts the start of the string.
    \S+: Matches one or more non-whitespace characters.
    @: Matches the "@" symbol.
    \S+: Matches one or more non-whitespace characters again.
    \.: Matches a dot (".") character.
    \S+: Matches one or more non-whitespace characters for the domain part.
    $: Asserts the end of the string.
  */

  return (
    <Paper>
      <Box m={2} pl={2} pr={2} pt={6} pb={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PageHeader title="Contact Form" />
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // disabled={!isFormValid()}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <PageHeader title="Contact Information" />
            {contact_items.map((item) => (
              <Stack
                key={item.title}
                direction="row"
                spacing={1}
                alignItems="center"
                mb={2}
              >
                <Typography variant="subtitle2">{`${item.title}:`}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.value}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

/*

!!errors.message: The double negation (!!) is a JavaScript pattern 
commonly used to convert a truthy or falsy value to a boolean. 
In this context, it converts the value of errors.message to a boolean. 
If errors.message is truthy (meaning there is an error message 
for the "Message" field), !!errors.message will evaluate to true. 
If errors.message is falsy 
(meaning there are no errors for the "Message" field),
!!errors.message will evaluate to false.

*/

export default Contact;

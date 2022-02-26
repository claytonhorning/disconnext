import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Input,
  Box,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mayvjwzr",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true);
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <FormControl>
        <form onSubmit={handleOnSubmit}>
          <InputGroup size="lg">
            <InputLeftElement children={<EmailIcon color="gray.300" />} />
            <Input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              placeholder="Email Address"
              rounded="none"
            />

            <Box
              as="button"
              type="submit"
              disabled={status.submitting}
              width="100px"
              as="button"
              _hover={{ bg: "black" }}
              color="white"
              bg="blue.400"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            >
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </Box>
          </InputGroup>
        </form>
      </FormControl>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </>
  );
};

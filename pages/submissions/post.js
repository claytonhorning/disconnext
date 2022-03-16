import { useState } from "react";
import { useEffect } from "react";

import { FormControl, Input, FormLabel } from "@chakra-ui/react";
import Layout from "../../components/Layout";

import { Button } from "@chakra-ui/react";

export default function SubmissionPost() {
  const [form, setForm] = useState({
    userSubmitted: "",
    userAnswered: "",
    question: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        // createSubmission();
        alert("success");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const validate = () => {
    let err = {};

    if (!form.question) {
      err.question = "Question is required";
    }
    if (!form.userAnswered) {
      err.question = "User answered is required";
    }
    if (!form.userSubmitted) {
      err.question = "User submitted is required";
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Question</FormLabel>
          <Input id="question" onChange={handleChange}></Input>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  );
}

import { useForm } from "@mantine/form";
import { TextInput, Button, PasswordInput } from "@mantine/core";
import classes from "./../styles/loginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const submitHandler = () => {
    navigate("/dashboard");
  };

  return (
    <form onSubmit={submitHandler}>
      <TextInput
        radius="md"
        placeholder="email"
        classNames={{
          input: classes.input,
        }}
        key={form.key("email")}
        {...form.getInputProps("email")}
      />{" "}
      <PasswordInput
        mt="md"
        placeholder="password"
        radius="md"
        classNames={{
          input: classes.input,
        }}
      />
      <Button type="submit" mt="md" radius="md" w="100%">
        Sign In
      </Button>
    </form>
  );
}

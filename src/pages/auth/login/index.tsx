import { Box, Flex, Image, rem, Stack, Text } from "@mantine/core";
import classes from "./styles/login.module.css";
import LoginForm from "./components/LoginForm";

const index = () => {
  return (
    <Flex align="center" gap={rem(10)} className={classes.container}>
      <Box className={classes.left_container}>
        <Image
          src={
            "https://i.pinimg.com/736x/12/bb/25/12bb25fe581626fede0acef14493227f.jpg"
          }
          fit="cover"
          h="100%"
        />
      </Box>
      <Box className={classes.right_conatiner}>
        <Box
          w={{
            md: "60%",
          }}
        >
          <Stack align="center" justify="center" gap="xs" mb="lg">
            <Text fw="bolder" fz="h1">
              Sign In
            </Text>
            <Text c="var(--mantine-color-gray-6)" fw="bold">
              Welcome to Fary
            </Text>
          </Stack>

          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default index;

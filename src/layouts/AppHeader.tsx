import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Burger,
  Button,
  Container,
  Flex,
  Image,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { nprogress } from "@mantine/nprogress";
import { useIsFetching } from "@tanstack/react-query";
import classes from "./styles/AppHeader.module.css";
import ThemeSwitch from "./ThemeSwitch";
import useCurrentNav from "../hooks/useCurrentNav";
import { useMediaQuery } from "@mantine/hooks";
import faryLogo from "./../assets/img/fary-logo.svg";
import fLogo from "./../assets/img/f-logo.svg";
import { IconMenu2 } from "@tabler/icons-react";

const HEADER_HEIGHT = rem(60);

interface AppHeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  minOpened: boolean;
  setMinOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppHeader({
  opened,
  setOpened,
  minOpened,
  setMinOpened,
}: AppHeaderProps) {
  const navigate = useNavigate();
  const { currentNav } = useCurrentNav();
  const smallScreen = useMediaQuery("(max-width: 48em)");
  // Add loading progress at the top
  const isFetching = useIsFetching();
  useEffect(() => {
    isFetching ? nprogress.start() : nprogress.complete();
    return () => {
      nprogress.reset();
    };
  }, [isFetching]);

  return (
    <>
      <Button
        component="a"
        href="#main-content"
        color="dark"
        variant="default"
        size="md"
        className={classes.skipBtn}
      >
        Skip to Main Content
      </Button>
      <Box h={HEADER_HEIGHT} className={classes.root}>
        <Container className={classes.header} fluid>
          {/* nav width + content padding - header padding - logo width */}
          <Flex className={classes.containerFlex}>
            <Burger
              opened={opened}
              className={classes.burger}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color="gray.6"
              mr="md"
            />
            <UnstyledButton
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              {minOpened ? (
                <Image
                  src={fLogo}
                  w={35}
                  h={30}
                  style={{
                    transform: "translateX(-20px)",
                  }}
                />
              ) : (
                <Image src={faryLogo} w={75} h={15} />
              )}
            </UnstyledButton>

            <Flex align="center" ml={smallScreen ? "auto" : 0}>
              {!smallScreen && (
                <UnstyledButton
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  mr="md"
                  onClick={() => setMinOpened((o) => !o)}
                >
                  <IconMenu2 color="var(--mantine-color-gray-6)" />
                </UnstyledButton>
              )}

              {currentNav && (
                <Flex gap={6}>
                  {currentNav.icon}

                  <Text tt="uppercase" fw={600} lh="unset">
                    {currentNav.title}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>

          <Flex gap="xs">
            <ThemeSwitch />
            {/* <ProfileDropdown /> */}
          </Flex>
        </Container>
      </Box>
    </>
  );
}

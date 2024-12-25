import { FormEvent } from "react"
import { Center, Flex, Image, Paper, Stack, Text } from "@mantine/core"
import cx from "clsx"
import faryLogo from "@/assets/img/fary-logo-lg.svg"
import classes from "./styles/OuterLayout.module.css"

interface OuterLayoutProps {
  desc?: string
  children: React.ReactNode
  noBg?: boolean
  includeLogo?: boolean
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}

export default function OuterLayout({
  desc = "Safe and Reliable Transportation for Everyone!",
  includeLogo = true,
  noBg = false,
  children,
  onSubmit,
}: OuterLayoutProps) {
  return (
    <Center
      className={cx({ [classes.root]: !noBg })}
      h={includeLogo ? "100vh" : "auto"}
    >
      <Flex gap="xl" className={classes.flexLayout}>
        {includeLogo && (
          <Flex direction="column" align="center" gap="xs">
            <Image
              src={faryLogo}
              w={137}
              h={28}
              mx="auto"
              style={{ width: "8.5625rem" }}
            />
            <Text fz={16}>{desc}</Text>
          </Flex>
        )}

        <Paper p={32} radius="md" className={classes.paperBox}>
          <form onSubmit={onSubmit}>
            <Stack w={320} gap="xs">
              {children}
            </Stack>
          </form>
        </Paper>
      </Flex>
    </Center>
  )
}

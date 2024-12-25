import { Box, Flex } from "@mantine/core"
import classes from "./styles/TopLayout.module.css"

interface TopLayoutProps {
  children: React.ReactNode
}

export default function TopLayout({ children }: TopLayoutProps) {
  return (
    <Box className={classes.wrapper}>
      <Flex align="center" gap={10} className={classes.container}>
        {children}
      </Flex>
    </Box>
  )
}

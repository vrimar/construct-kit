import { Box, Stack, Text } from "@b3/ui";
import type { ReactNode } from "react";

import { DefaultAuthLogo } from "./DefaultAuthLogo";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  showTitle?: boolean;
  logo?: ReactNode;
}

export const AuthLayout = ({ children, showTitle, title, logo }: AuthLayoutProps) => {
  const logoEl = logo ?? <DefaultAuthLogo width={360} />;

  return (
    <Box
      display="flex"
      height="100%"
      width="100%"
      bg="bg.subtle"
      justifyContent="center"
      alignItems="center"
    >
      <Stack alignItems="center">
        {logoEl}
        <Stack gap="5">
          {showTitle && title && (
            <Text
              fontSize="2xl"
              mb="5"
              textAlign="center"
            >
              {title}
            </Text>
          )}
          <Box
            width="320px"
            maxWidth="320px"
          >
            {children}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

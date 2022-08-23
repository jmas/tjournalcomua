import type { NextPage } from "next";
import { StyledFirebaseAuth } from "../components/StyledFirebaseAuth";
import { auth } from "../vendor/firebase";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Box, Center } from "@mantine/core";

const Auth: NextPage = () => {
  return (
    <Center style={{ minHeight: "100vh" }}>
      <Box sx={{ maxWidth: "600px" }} p="lg">
        <StyledFirebaseAuth
          uiConfig={{
            signInSuccessUrl: "/user",
            signInOptions: [GoogleAuthProvider.PROVIDER_ID],
            tosUrl: "/terms",
            privacyPolicyUrl: "/privacy",
          }}
          firebaseAuth={auth}
        />
      </Box>
    </Center>
  );
};

export default Auth;

import { Button, Title, Text, Box, Center, Stack } from "@mantine/core";
import type { NextPage } from "next";
import { useAuth } from "../context/Auth";

const User: NextPage = () => {
  const [, user] = useAuth();

  return (
    <Center style={{ minHeight: "100vh" }}>
      <Box sx={{ maxWidth: "600px" }} p="lg">
        <Stack spacing="lg">
          <Title>Привіт, {user?.displayName}!</Title>
          <Text>
            Пропоную приєднатися до чату в телеграмі щоб привітатися і написати
            трохи про себе: своє місто, чим взмозі допомогти проєкту, та посто
            опиши що тобі більш за все подобається в TJournal. Можно
            використовувати мову яка тобі пасує. 😉
          </Text>
          <Box>
            <Button component="a" href="https://t.me/tjournalcomua">
              Перейти до чату @tjournalcomua
            </Button>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};

export default User;

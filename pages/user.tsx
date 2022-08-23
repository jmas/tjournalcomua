import { Button, Title, Text, Box, Center, Stack } from "@mantine/core";
import type { NextPage } from "next";
import { useMemo } from "react";
import { useAuth } from "../context/Auth";

const User: NextPage = () => {
  const [, user] = useAuth();

  const content = useMemo(() => {
    if (
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.language.toLowerCase().includes("ua")
    ) {
      return (
        <>
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
        </>
      );
    }

    return (
      <>
        <Title>Привет, {user?.displayName}!</Title>
        <Text>
          Предлагаю присоедениться к чату в Телеграме чтобы поприветствовать и
          написать немного про себя: свой город, чем занимаешья, чем можешь
          помочь проекту, да и просто опиши что тебе больше всего нравится в
          TJournal. Можешь использовать язык который тебе идет. 😉
        </Text>
        <Box>
          <Button component="a" href="https://t.me/tjournalcomua">
            Перейти в чат @tjournalcomua
          </Button>
        </Box>
      </>
    );
  }, [user]);

  return (
    <Center style={{ minHeight: "100vh" }}>
      <Box sx={{ maxWidth: "600px" }} p="lg">
        <Stack spacing="lg">{content}</Stack>
      </Box>
    </Center>
  );
};

export default User;

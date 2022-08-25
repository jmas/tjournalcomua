import { Button, Title, Text, Box, Center, Stack, Group } from "@mantine/core";
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
          <Group spacing={2}>
            <Button component="a" href="https://t.me/tjournalcomua">
              Перейти до чату @tjournalcomua
            </Button>
            <Button component="a" href="https://ujournal.com.ua">
              ujournal.com.ua
            </Button>
          </Group>
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
        <Group>
          <Button component="a" href="https://t.me/tjournalcomua">
            Перейти в чат @tjournalcomua
          </Button>
          <Button component="a" href="https://ujournal.com.ua">
            ujournal.com.ua
          </Button>
        </Group>
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

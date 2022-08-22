import { Box, Center, Title, Text, Stack, Button } from "@mantine/core";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "firebaseui";
import type { NextPage } from "next";
import Link from "next/link";
import { StyledFirebaseAuth } from "../components/StyledFirebaseAuth";

const Home: NextPage = () => {
  return (
    <Center style={{ minHeight: "100vh" }}>
      <Stack spacing="md" sx={{ maxWidth: "600px" }} p="lg">
        <Title order={1}>Це українська версія TJournal</Title>
        <Text>
          Привіт! Як ти вже знаєш, наш улюблений проєкт, який має такі
          властивості, як лампова атмосфера і ліберальні погляди на світ
          зачиняється. Це відбудеться 10 вересня.
        </Text>
        <Text>
          Тож я вирішив не зволікати й зробити хоча б спробу згуртувати частину
          україномовної аудиторії на новому проєкті.
        </Text>
        <Text>З назвою тут все просто - це буде така сама назва TJournal.</Text>
        <Text>
          В мене нема конкретного плану як ми будемо робити цей проєкт, але є
          почуття, що це може перетворитися на щось цікаве, де українці зможуть
          обмінюватись думками, постити меми та спостерігати за вічним, тобто за
          своєю кармою.
        </Text>
        <Text>
          Я не зміг придумати нічого кращого, як додати просту авторизацію через
          Google, та створити чат у Телеграмі. Тож далі ти бачиш кнопку яка
          авторизує тебе на сайті, у мене зъявиться твоя адреса і я зможу
          відправляти апдейти по проєкту тобі на пошту.
        </Text>
        <Box>
          <Link href="/auth">
            <Button component="a">Увійти</Button>
          </Link>
        </Box>
      </Stack>
    </Center>
  );
};

export default Home;

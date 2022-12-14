import { Box, Center, Title, Text, Stack, Button } from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useMemo } from "react";

const Home: NextPage = () => {
  const content = useMemo(() => {
    if (
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.language.toLowerCase().includes("ua")
    ) {
      return (
        <>
          <Title order={1}>
            Це версія TJournal для українського суспільства 🇺🇦
          </Title>
          <Text>
            Привіт! Як ти вже знаєш, наш улюблений проєкт, який має такі
            властивості, як лампова атмосфера і ліберальні погляди на світ,
            зачиняється. Це відбудеться 10 вересня.
          </Text>
          <Text>
            Тож я вирішив не зволікати й зробити хоча б спробу згуртувати
            частину аудиторії TJ з України на новому проєкті.
          </Text>
          <Text>
            З назвою тут все просто - це буде така сама назва TJournal.
          </Text>
          <Text>
            В мене нема конкретного плану як ми будемо робити цей проєкт, але є
            почуття, що це може перетворитися на щось цікаве, де українці
            зможуть обмінюватись думками, постити меми про бавовну та
            спостерігати за вічним, тобто за своєю кармою.
          </Text>
          <Text>
            Я не зміг придумати нічого кращого, як додати просту авторизацію
            через Google, та створити чат у Телеграмі. Тож далі ти бачиш кнопку
            яка авторизує тебе на сайті, а в мене зʼявиться твій адрес пошти і я
            зможу відправляти апдейти по проєкту тобі на пошту.
          </Text>
          <Box>
            <Link href="/auth">
              <Button component="a">Увійти</Button>
            </Link>
          </Box>
        </>
      );
    }

    return (
      <>
        <Title order={1}>
          Это реинкарнация TJournal для украинского сообщества 🇺🇦
        </Title>
        <Text>
          Привет! Как ты уже знаешь, наш любимый проект, который имеет такие
          качества, как ламповая атмосфера и либеральные взгляды на мир,
          закрывается. Это произойдет 10 сентября.
        </Text>
        <Text>
          Поэтому я решил не теряя времени сделать хотя бы попытку объеденить
          часть аудитории TJ из Украины на новом проекте.
        </Text>
        <Text>С названием все просто - это тоже самое название TJournal.</Text>
        <Text>
          У меня нет конкретного плана как мы будем делать этот проект, но есть
          ощущение что это может превратиться в что-то интересное, где украинцы
          смогут обмениваться мыслями, постить мемы про бавовну и наблюдать за
          вечным, то есть за своей кармой.
        </Text>
        <Text>
          Я не смог придумать ничего лучше, чем добавить авторизацию через
          Google и создать чат в Телеграме. Поэтому дальше ты видишь кнопку,
          которая авторизирует тебя на сайте, а у меня появится твой адрес
          электронной почты и я смогу отправлять тебе апдейты по электронной
          почте.
        </Text>
        <Box>
          <Link href="/auth">
            <Button component="a">Войти</Button>
          </Link>
        </Box>
      </>
    );
  }, []);

  return (
    <Center style={{ minHeight: "100vh" }}>
      <Stack spacing="md" sx={{ maxWidth: "600px" }} p="lg">
        {content}
      </Stack>
    </Center>
  );
};

export default Home;

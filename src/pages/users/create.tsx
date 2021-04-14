import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import { InputForm } from 'components/Form/Input'
import Header from 'components/Header'

import Sidebar from 'components/Sidebar'
import Link from 'next/link'

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack>
            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <InputForm name="name" label="Nome completo" />
              <InputForm name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="280px" spacing="8">
              <InputForm name="password" type="password" label="Senha" />
              <InputForm
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha" cursor="pointer">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from 'context/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNavs'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export default function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}

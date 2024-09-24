import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'

// TODO: Check if it is READONLY
const LinkItem = ({href, path, children} : Readonly<{
    href: string;
    path: string;
    children: React.ReactNode;
  }>) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');


    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
};

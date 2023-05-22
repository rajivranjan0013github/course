import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const disptch = useDispatch();
  const logoutHandler = () => {
    onClose();
    disptch(logout());
  };

  const LinkButton = ({ url = '/', title }) => (
    <Link to={url}>
      <Button onClick={onClose} variant={'ghost'}>
        {title}
      </Button>
    </Link>
  );

  return (
    <>
      <ColorModeSwitcher />
      <Button
        zIndex={'overlay'}
        colorScheme={'yellow'}
        width={'12'}
        h={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={'1px'}
            display={'flex'}
            justifyContent={'center'}
          >
            COURSE BUNDLE
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'}>
              <LinkButton url="/" title={'Home'} />
              <LinkButton url="/courses" title={'Browse All Courses'} />
              <LinkButton url="/request" title={'Request a Course'} />
              <LinkButton url="/contact" title={'Contact Us'} />
              <LinkButton url="/about" title={'About'} />
              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to={'/profile'}>
                          <Button
                            variant={'ghost'}
                            colorScheme={'yellow'}
                            onClick={onClose}
                          >
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <Link to={'/admin/dashboard'}>
                          <Button
                            variant={'ghost'}
                            colorScheme={'purple'}
                            onClick={onClose}
                          >
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to={'/login'}>
                      <Button colorScheme={'yellow'} onClick={onClose}>
                        Login
                      </Button>
                    </Link>
                    <p>OR</p>
                    <Link to={'/register'}>
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

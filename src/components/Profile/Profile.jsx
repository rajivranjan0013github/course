import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../auth/Register';

const Profile = () => {
  const user = {
    name: 'Rajiv Ranjan  ',
    email: 'rajivranjan0013@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'asdfsf',
        poster:
          'https://rukminim1.flixcart.com/image/832/832/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={'95vh'} maxWidth={'container.lg'} py={'8'}>
      <Heading children={'Profile'} textTransform={'uppercase'} m={'8'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        p={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme={'yellow'} variant={'ghost'}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children={'Name'} fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children={'Email'} fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children={'Created At'} fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children={'Subscription'} fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button>Cancel Subscription</Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Stack>
        <Heading children={'Playlist'} size={'md'} my={'8'} />
        {user.playlist.length > 0 && (
          <Stack
            direction={['column', 'row']}
            alignItems={'center'}
            flexWrap="wrap"
            p={'4'}
          >
            {user.playlist.map(element => (
              <VStack w={'48'} m={'2'} key={element.course}>
                <Image
                  boxSize={'full'}
                  objectFit={'contain'}
                  src={element.poster}
                />
                <HStack>
                  <Link to={`/course/${element.course}`}>
                    <Button variant={'ghost'} colorScheme={'yellow'}>
                      Watch Now
                    </Button>
                  </Link>
                  <Button
                    onClick={() => removeFromPlaylistHandler(element.course)}
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            ))}
          </Stack>
        )}
      </Stack>

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImage('');
    setImagePrev('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input
                  type={'file'}
                  onChange={changeImage}
                  css={{ '&::file-selector-button': fileUploadCss }}
                />
                <Button w={'full'} colorScheme={'yellow'} type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler} mr={'3'}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

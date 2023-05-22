import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} p={'8'}>
    <VStack>
      <Avatar
        boxSize={['40', '48']}
        src={`https://scontent.fpat2-4.fna.fbcdn.net/v/t1.6435-9/161431146_438533047410754_6519328572282293594_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2bzVySjqmqYAX-cc25X&_nc_ht=scontent.fpat2-4.fna&oh=00_AfDxLMZeCXawQ8_w4s3U9iav2rxJJwCxziwL65nV1d5pxQ&oe=63E50A59`}
      />
      <Text opacity={0.7}>Co-Founder</Text>
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children={'Rajiv Ranjan'} size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am Full Stack Developer and a teacher.
      Our mission is to provide quality content at reasonable price`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      muted
      loop
      controls
      src={introVideo}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children={'Terms And Condition'}
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
      <Text
        letterSpacing={'widest'}
        fontFamily={'heading'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children={'Refund Only applicable for cancellation within 7 days'}
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} p={'16'} boxShadow={'lg'}>
      <Heading textAlign={['center', 'left']} children={'About Us'} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming plateform with some premium courses available
          only for premium users.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme={'yellow'}>
            Checkout Our Plans
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children={'Payment is Secured by Paytm'}
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
        />
      </HStack>
    </Container>
  );
};

export default About;

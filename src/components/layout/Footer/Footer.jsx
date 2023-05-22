import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} w={'full'}>
          <Heading children="All Right Reserve" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Rajiv Ranjan"
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color="white"
          fontSize={'50'}
        >
          <a
            rel={'noreferrer'}
            href="https://youtube.com/6packprogrammer"
            target={'_blank'}
          >
            <TiSocialYoutubeCircular />
          </a>
          <a
            rel={'noreferrer'}
            href="https://instagram.com/rajivrocky90"
            target={'_blank'}
          >
            <TiSocialInstagramCircular />
          </a>
          <a
            rel={'noreferrer'}
            href="https://github.com/rajivranjan0013"
            target={'_blank'}
          >
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;

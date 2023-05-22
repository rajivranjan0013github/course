import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image boxSize={'60'} objectFit={'contain'} src={imageSrc} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        size={'sm'}
        children={title}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text
          children={'Creator'}
          textTransform={'uppercase'}
          fontWeight={'bold'}
        />
        <Text
          children={creator}
          textTransform={'uppercase'}
          fontFamily={'body'}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlayListHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const addToPlayListHandler = () => {
    console.log('add to playlist handler is clicked');
  };
  const categories = [
    'Web development',
    'Artificial Inteligence',
    'Data Structure & Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children={'All Courses'} margin={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder={'Search a Course...'}
        type={'text'}
        focusBorderColor={'yellow.500'}
      />
      <HStack
        overflowX={'auto'}
        py={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} minW={'60'} onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample1'}
          description={'Sample1'}
          views={21}
          imageSrc={
            'https://rukminim1.flixcart.com/image/832/832/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70'
          }
          id={'Sample1'}
          creator={'Sample1'}
          lectureCount={2}
          addToPlayListHandler={addToPlayListHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;

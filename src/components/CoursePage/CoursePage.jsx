import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  //   const lectureTitle = 'lectuerTitle';
  const lectres = [
    {
      _id: 'sasadas 1',
      title: 'sample video 1',
      description: 'sample wertygjhfdfgnhgbf sdfbgfv',
      video: {
        url: 'asdasd',
      },
    },
    {
      _id: 'sasadas2',
      title: 'sample video 2',
      description: 'sample wertygjhfdfgnhgbf sdfbgfv',
      video: {
        url: 'asdasd',
      },
    },
    {
      _id: 'sasadas3',
      title: 'sample video 3',
      description: 'sample wertygjhfdfgnhgbf sdfbgfv',
      video: {
        url: 'asdasd',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          src={introVideo}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectres[lectureNumber].title}`}
          m={'4'}
        />
        <Heading children={'discription'} m={'4'} />
        <Text children={lectres[lectureNumber].description} m={'4'} />
      </Box>
      <VStack>
        {lectres.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;

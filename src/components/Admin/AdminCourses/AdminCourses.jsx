import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import SideBar from '../SideBar';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courses = [
    {
      _id: 'asdgfhhtgdrfsd',
      title: 'React Courses',
      category: 'Web development',
      poster: {
        url: `https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`,
      },
      createdBy: 'rajivanaj-admin',
      views: 123,
      numOfVideo: 12,
    },
  ];

  const courseDetailHandler = userId => {
    onOpen();
    console.log(userId);
  };
  const deleteHandler = userId => {
    console.log(userId);
  };

  const deleteLectureHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          children={'All Users'}
          my={'16'}
          alignItems={['center', 'left']}
          textTransform={'uppercase'}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table size={'lg'} variant={'simple'}>
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row
                  courseDetailHandler={courseDetailHandler}
                  deleteHandler={deleteHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={'asdgh fdsdafs'}
          courseTitle={'React Course'}
          deleteHandler={deleteLectureHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <SideBar />
    </Grid>
  );
};

function Row({ item, courseDetailHandler, deleteHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.title}</Td>
      <Td>
        <Image sizes="xs" src={item.poster.url} />
      </Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideo}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            Views Lectures
          </Button>
          <Button onClick={() => deleteHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;

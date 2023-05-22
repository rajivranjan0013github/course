import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import SideBar from '../SideBar';

const Users = () => {
  const users = [
    {
      _id: 'asdgfhhtgdrfsd',
      name: 'rajiv Ranan',
      role: 'admin',
      subscription: {
        status: 'active',
      },
      email: 'rajivanaj@gamil.com',
    },
  ];

  const updateHandler = userId => {
    console.log(userId);
  };
  const deleteHandler = userId => {
    console.log(userId);
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          children={'All Users'}
          my={'16'}
          alignItems={['center', 'left']}
          textTransform={'uppercase'}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table size={'lg'} variant={'simple'}>
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name0</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users.map(item => (
                <Row
                  updateHandler={updateHandler}
                  deleteHandler={deleteHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <SideBar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            Change Role
          </Button>
          <Button onClick={() => deleteHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

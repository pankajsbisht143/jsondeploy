import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <Flex w='100%' m='auto' justify='space-between' bg='black'color="white" p='0.7rem'>
            <Flex mx='1rem'>
                <Link to='/'><Heading fontSize='1.5rem'>Expense Tracker</Heading></Link>
            </Flex>
            <Flex justify='space-around'>
                <Box mx='1rem'>
                    <Link to='/signup'>Signup</Link>
                </Box>
                <Box mx='1rem'>
                    <Link to='/login'>Login</Link>
                </Box>
                <Box mx='1rem'>
                    <Link to='/dashboard'>Dashboard</Link>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Navbar;
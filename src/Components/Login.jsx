import React, { useState } from 'react';
import {Box,  Input, Heading, Button} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/userActions';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
        navigate('/dashboard')

        setEmail('')
        setPassword('')
    }

    return (
        <Box w='35%' m='2rem auto' boxShadow='0 0 5px black' p='1.5rem' borderRadius='0.5rem'>
            <Heading textAlign='center' pb='1rem'>Login</Heading>
            <form onSubmit={handleSubmit}>
                <Input type='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} my='1rem'/>
                <Input type='password' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} my='1rem'/>

                <Button w='100%' colorScheme='green' type='submit' my='1rem'>Login</Button>
            </form>
        </Box>
    );
}

export default Login;
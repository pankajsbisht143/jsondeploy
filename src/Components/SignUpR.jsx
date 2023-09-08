import { useState } from "react";
import {Box, Button, Heading, Input} from "@chakra-ui/react"
import { signupUser } from "../Redux/userActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function SignUpR() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser(name, email, password));
        navigate('/login')

        setName('')
        setEmail('')
        setPassword('')
    }
   

    return (
        <Box w='35%' m='2rem auto' boxShadow='0 0 5px black' p='1.5rem' borderRadius='0.5rem'>
            <Heading textAlign='center' pb='1rem'>Signup</Heading>
            <form 
            onSubmit={handleSubmit}
            >
                <Input type='text' placeholder='Enter Name' 
                onChange={(e)=>{setName(e.target.value)}
                } my='1rem' />
                <Input type='email' placeholder='Enter Email' 
                onChange={(e)=>{setEmail(e.target.value)}
                } my='1rem'/>
                <Input type='password' placeholder='Enter Password' 
                onChange={(e)=>{setPassword(e.target.value)}
                } my='1rem'/>

                <Button w='100%' colorScheme='green' type='submit' my='1rem'>Signup</Button>
            </form>
        </Box>
    );
}

export default SignUpR;
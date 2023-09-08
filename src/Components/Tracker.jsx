import React, { useState } from 'react';
import { Box,  Input, Heading, Button, Select } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addTransaction } from '../Redux/transactioAction';

function Tracker(props) {
    const dispatch = useDispatch()
    const [type, setType] = useState('Income');
    const [category, setCategory] = useState('Salary');
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')


    const handleCreate = () => {
        dispatch(addTransaction(type, category, amount, date));

        setType('Income');
        setCategory('Salary');
        setAmount('');
        setDate('');
    };

    return (
        <Box w='35%' m='2.5rem auto' boxShadow='0 0 5px black' p='1.5rem' borderRadius='0.5rem'>
            <Heading textAlign='center'  pb='1rem'>Tracker</Heading>
            <form>
                <Box>
                    <label>Type:</label>
                    <Select value={type} onChange={(e) => { setType(e.target.value) }}>
                        <option value="">Select Type</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </Select>
                </Box>
                <Box >
                    <label>Category:</label>
                    <Select value={category} onChange={(e) => { setCategory(e.target.value) }}>
                        {type === 'Income' ? (
                            <>
                                <option value="Salary">Salary</option>
                                <option value="Gifts">Gifts</option>
                                <option value="Refunds">Refunds</option>
                                <option value="Other">Other</option>
                            </>
                        ) : (
                            <>
                                <option value="Food & Drinks">Food & Drinks</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Housing">Housing</option>
                                <option value="Bills">Bills</option>
                                <option value="Vehicle & Transport">Vehicle & Transport</option>
                                <option value="Lifestyle">Lifestyle</option>
                            </>
                        )}
                    </Select>
                </Box>
                <Box my='1rem'>
                    <Input type="number" placeholder='Enter Amount in Rupees' value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                </Box>
                <Box my='1rem'>
                    <Input type="date" placeholder='Enter Date' value={date} onChange={(e) => { setDate(e.target.value) }} />
                </Box>
                <Button w='100%' colorScheme='green' my='1rem' type="button" onClick={handleCreate}>
                    Create
                </Button>
            </form>
        </Box>

    );
}

export default Tracker;
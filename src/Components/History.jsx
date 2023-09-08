import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction, updateTransaction} from '../Redux/transactioAction';
import { Box, Button, Heading, Select, Text } from '@chakra-ui/react';

const History = () => {
    const dispatch = useDispatch();
    // const transactions = useSelector((state) => state);
    // console.log(transactions)
    let [transactions,setTrans]=useState([]);
    const [filterType, setFilterType] = useState('');
    const [sortOrder, setSortOrder] = useState('');

   const fetchData=async()=>{
    try{
   let res=await fetch(`http://localhost:3000/transactions`)
   let data=await res.json();
      setTrans(data);
      console.log(data)
    }catch(err){
        console.log(err);
    }
   }
   useEffect(()=>{
    fetchData();
   },[])
    const handleDelete = (id) => {
        dispatch(deleteTransaction(id));
    };

    const handleUpdate = (id, updatedTransaction) => {
        dispatch(updateTransaction(id, updatedTransaction));
    };

    // const filteredTransactions = transactions.filter((transaction) =>
    //     filterType === 'All' ? true : transaction.type === filterType
    // );

    // const sortedTransactions = filteredTransactions.sort((a, b) =>
    //     sortOrder === 'Ascending' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    // );

    return (
        <Box>
            <Heading textAlign='center'>History</Heading>
            <Box>
                <label>Filter by Type:</label>
                <Select value={filterType} onChange={(e)=>{setFilterType(e.target.value)}}>
                    <option value="All">All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </Select>
            </Box>
            <Box>
                <label>Sort by Date:</label>
                <Select value={sortOrder} onChange={(e)=>{setSortOrder(e.target.value)}}>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </Select>
            </Box>
            <Box>
                {
                transactions.map((item)=>{
                   return <Box key={item.id}>
                   <Text>Type: {item.type}</Text>
                   <Text>Category: {item.category}</Text>
                   <Text>Amount: {item.amount}</Text>
                   <Text>Date: {item.date}</Text>
                   <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                   <Button onClick={() => handleUpdate(item.id, { amount: 100 })}>Edit</Button>
               </Box>
                })
            }
            </Box>
        </Box>
    );
};

export default History;

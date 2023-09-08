import React from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
    const transactions = useSelector((state) => state.transactions);

    console.log(transactions);

    const getIncomeData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [5, 29, 23, 15, 11, 43],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#33FF66',
                    '#6633FF',
                    '#FF6633',
                    '#99FF33',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const getExpenseData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [2, 9, 13, 15, 21, 33],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#33FF66',
                    '#6633FF',
                    '#FF6633',
                    '#99FF33',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
        // };
    };

    return (
        <Box textAlign='center'>
            <Heading mx='1rem' >Analytics</Heading>
            <Flex justify='space-between' mt='2rem' p='2rem'>
                <Box w='40%'>
                    <Text fontWeight='500' fontSize='1.2rem'>Income</Text>
                    <Pie data={getIncomeData} />
                </Box>
                <Box w='40%'>
                    <Text fontWeight='500' fontSize='1.2rem'>Expense</Text>
                    <Pie data={getExpenseData} />
                </Box>
            </Flex>
        </Box>
    );
};

export default Analytics;

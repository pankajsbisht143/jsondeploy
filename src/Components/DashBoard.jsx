import React, { useState } from 'react';
import { Box, Flex,  Heading, Button } from '@chakra-ui/react'
// import { useDispatch } from 'react-redux';

import History from './History';
import Tracker from './Tracker';
import Analytics from './Analystics';

function Dashboard(props) {
    
    const [activeTab, setActiveTab] = useState("Tracker")

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <Box>
            <Heading textAlign='center' py='1rem'>Dashboard</Heading>
            <Flex justify='space-around' w='40%' m='2rem auto'>
                <Button onClick={() => handleTabClick("Tracker")}>Tracker</Button>
                <Button onClick={() => handleTabClick("Analytics")}>Analytics</Button>
                <Button onClick={() => handleTabClick("History")}>History</Button>
            </Flex>


            {activeTab === 'Tracker' && <Tracker />}
            {activeTab === 'Analytics' && <Analytics />}
            {activeTab === 'History' && <History />}

        </Box>
    );
}

export default Dashboard;
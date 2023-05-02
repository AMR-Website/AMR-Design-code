import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Bubble } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'Bubble Chart',
      data: [
        { x: 10, y: 20, r: 10 },
        { x: 15, y: 10, r: 20 },
        { x: 25, y: 30, r: 15 },
        { x: 35, y: 25, r: 25 },
        { x: 50, y: 35, r: 30 },
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgb(54, 162, 235)',
    },
  ],
};

const BubbleChart = () => {
  return (
    <Flex justify="center" alignItems="center" h="100%">
      <Bubble data={data} />
    </Flex>
  );
};

export default BubbleChart;

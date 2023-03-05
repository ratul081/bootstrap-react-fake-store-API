import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Graph = ({ products }) => {
  return (
    <div className='m-5 d-flex justify-content-center '>
      <div className='text-center'>
        <h3 className='mb-4' >Here are the sales reports </h3>
      <BarChart
        width={1500}
        height={300}
        data={products}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="rating.count" fill="#8884d8"/>
      </BarChart>
      </div>
    </div>
  );
};

export default Graph;
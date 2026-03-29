'use client'

import React from 'react'
import { Grid, Card, Flex, Heading, Text } from '@radix-ui/themes'
import {Pie, PieChart} from 'recharts'


const date = new Date();
const month = date.toLocaleString('en-US', { month: 'long' });


const chartData = [
  {nutrients: 'Calories', value: 1500, goal: 2000, fill: "#19198fff"},
  {nutrients: 'Protein', value: 100, goal: 180, fill: "#1F1FFF"},
  {nutrients: 'Carbs', value: 250, goal: 300, fill: "#4949FF"},
  {nutrients: 'Fat', value: 70, goal: 100, fill: "#7879FF"},
  {nutrients: 'Fiber', value: 25, goal: 30, fill: "#A3A3FF"},
  {nutrients: 'Sugar', value: 50, goal: 100, fill: "#BFBFFF" },
]

const chartConfig = {
  nutrients: {
    label: "Nutrients",
  },
  calories: {
    label: "Calories",
    color: "var(--chart-1)",
  },
  protein: {
    label: "Protein",
    color: "var(--chart-2)",
  },
  carbs: {
    label: "Carbs",
    color: "var(--chart-3)",
  },
  fat: {
    label: "Fat",
    color: "var(--chart-4)",
  },
  fiber: {
    label: "Fiber",
    color: "var(--chart-5)",
  },
  sugar: {
    label: "Sugar",
    color: "var(--chart-6)",
  },
} 

const Dashboard = () => {
  return (
    <div className="p-8">
      <Card className="flex flex-col m-8" size="4">
        <Flex direction="column" align="center" pb="4">
          <Heading size="6">{date.getDate()} {month}</Heading>
        </Flex>

        {/* Current Calorie w Chart */}
        <div className="flex items-center justify-center p-4">
            <PieChart width={250} height={250}>
              <Pie 
              data={chartData} 
              dataKey="value" 
              nameKey="nutrients" 
              innerRadius={60}
              outerRadius={90} 
              paddingAngle={2}
              stroke="none"
              >
              </Pie>
            </PieChart>
        </div>
        

        <Grid columns="1" width="auto">
          {chartData.map((label, index) => (
            <div key={index} className="flex flex-col items-center text-left p-4">
              <Text weight="bold">{label.nutrients}</Text>
              <Text className="text-gray-600 ">{label.value} / {label.goal}</Text>
            </div>
          ))}
        </Grid>
      </Card>
    </div>
  )
}

export default Dashboard

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { generateChartData } from "../helpers"
import { Exercise, Workout } from "../types"

export type ChartProps = {
  workouts: Workout[];
  exercise: Exercise;
}

const Chart: React.FC<ChartProps> = ({ workouts, exercise }): JSX.Element => {
  const [data, setData] = useState(generateChartData(workouts, exercise));

  useEffect(() => {
    setData(generateChartData(workouts, exercise));
  }, [workouts, exercise]);

  return (
    <div>
      <Line data={data} options={{
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
            max: exercise.goals[0],
            ticks: {
              color: 'white'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          },
          x: {
            display: false,
            title: {
              display: false
            }
            // ticks: {
            //   color: 'white'
            // },
            // grid: {
            //   color: 'rgba(255, 255, 255, 0.2)'
            // }
          }
        },
        color: 'white',
        plugins: {
          legend: {
            display: false
          }
        }
      }} />
    </div>
  )
}

export default Chart;
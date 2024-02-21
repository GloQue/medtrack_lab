import React from 'react'
import {Chart as ChartJs} from "chart.js/auto"
import {Bar, Doughnut, Line} from "react-chartjs-2"

function LabStats({labData}) {
  return (
    <div>
        <Line 
            data = {{
                labels : labData.map((item) => item.subCategory),
                datasets: [
                    {
                        label: 'Laboratory',
                        data: labData.map((item) => item.subCategory.length)
                    },

                    {
                        label: 'Radiology',
                        data: labData.map((item) => item.subCategory.length)
                    }
                ]
            }}
        />
    </div>
  )
}

export default LabStats
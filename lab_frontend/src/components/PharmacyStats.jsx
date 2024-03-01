import React from 'react'
import {Chart as ChartJs} from "chart.js/auto"
import {Bar, Doughnut, Line} from "react-chartjs-2"

function PharmacyStats({pharmacyData}) {
    console.log({pharmacyData})
  return (
    <div>
        <Line 
            data = {{
                labels : pharmacyData.map((item) => item.drugCode),
                datasets: [
                    {
                        label: 'Drugs',
                        data: pharmacyData.map((item) => item.drugName.length)
                    },

                    {
                        label: 'Price',
                        data: pharmacyData.map((item) => item.unitOfPricing)
                    }
                ]
            }}
        />
    </div>
  )
}

export default PharmacyStats
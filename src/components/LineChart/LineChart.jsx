// import React, { useEffect, useState } from 'react';
// import Chart from 'react-google-charts';

// function LineChart({ historicalData }) {
//     const [data, setData] = useState([["Date", "Prices"]]);

//     useEffect(() => {
//         let datacopy = [["Date", "Prices"]];
//         if (historicalData?.prices) {
//             historicalData.prices.forEach((item) => {
//                 const date = new Date(item[0]).toLocaleString();
//                 datacopy.push([date.slice(0, -5), item[1]]);
//             });
//             setData(datacopy);
//         }
//     }, [historicalData]);

//     return (
//         <Chart 
//             chartType="LineChart"
//             data={data}
//             height="100%"
            
//             legendToggle
//         />
//     );
// }

// export default LineChart;
import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

function LineChart({ historicalData }) {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        const datacopy = [["Date", "Prices"]];
        if (historicalData?.prices) {
            historicalData.prices.forEach((item) => {
                const date = new Date(item[0]);
                // Format date as 'dd/mm/yyyy'
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
                datacopy.push([formattedDate, item[1]]);
            });
            setData(datacopy);
        }
    }, [historicalData]);

    return (
        <Chart
            chartType="LineChart"
            data={data}
            height="400px"
            options={{
                title: 'Price Over Time',
                hAxis: {
                    title: 'Date',
                    format: 'dd/MM/yyyy', // Format for dates on x-axis
                },
                vAxis: {
                    title: 'Price',
                    format: 'currency', // Format for price on y-axis
                },
                legend: { position: 'bottom' },
                curveType: 'function', 
                chartArea: { width: '80%', height: '70%' },
            }}
        />
    );
}

export default LineChart;

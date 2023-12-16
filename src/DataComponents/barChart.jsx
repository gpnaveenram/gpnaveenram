// BarChart.js
import React from 'react';
import ProgressBar from './progressBar';


const BarChart = () => {
    return (
        <div style={{
            marginBottom: 10,
            marginTop: 0
        }}>
            <ProgressBar
                lebelName={"Server Migration   >>  "}
                percentage={"20%"}
                classname={"progress-bar bg-danger"} />
            <ProgressBar
                lebelName={"Sales Tracking   >>  "}
                percentage={"40%"}
                classname={"progress-bar bg-warning"} />
            <ProgressBar
                lebelName={"Customer Database   >>  "}
                percentage={"60%"}
                classname={"progress-bar"} />
            <ProgressBar
                lebelName={"Payout Details   >>  "}
                percentage={"80%"}
                classname={"progress-bar bg-info"} />
            <ProgressBar
                lebelName={"Account Setup   >>  "}
                percentage={"100%"}
                classname={"progress-bar bg-success"} />
        </div>


    );

};

export default BarChart;

import React from 'react';
import styles from './Content.module.css';
import DashboardCard from '../Components/dashboardCard';
import RowColumn from '../Components/rowCards';
import LineChart from '../DataComponents/lineChart';
import DoughnutChart from '../DataComponents/doughnutChart';
import ProgressBar from '../DataComponents/progressBar';
import BarChart from '../DataComponents/barChart';
import ContentTile from '../Components/contentTile';

const Content = () => {

    return (
        <div className='wrapper'>
            <div style={{ display: 'flex' }} className="row">
                <div style={{
                    padding: 10,
                    justifyContent: 'left',
                    display: 'flex'
                }} class="col-12 col-md-8">
                    <div style={{
                        width: 550,
                        minWidth: 250,
                        display: 'flex'
                    }}>
                        <div className={styles.header}>
                            <h1>&nbsp;Dashboard</h1>
                        </div>
                    </div>
                </div>
                <div style={{
                    padding: 10,
                    justifyContent: 'right'
                }} class="col-6 col-md-4"><button className={styles.addUser}><i className="fa-solid fa-download" style={{ color: "#1558cb;" }}></i>&nbsp;Generate Report</button></div>
                <RowColumn />
                <div className="row">
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        padding: 24,
                        justifyContent: 'center'
                    }} className="container-fluid"
                    >
                        <DashboardCard
                            title={"Earnings Overview"}
                            width={"col-12 col-sm-12 col-md-6"}
                            ht={400}
                        ><LineChart /></DashboardCard>
                        <DashboardCard
                            title={"Revenue Resources"}
                            width={"col-12 col-sm-12 col-md-4"}
                            ht={400}
                        ><DoughnutChart /></DashboardCard>
                        <DashboardCard
                            title={"Projects"}
                            width={"col-12 col-sm-12 col-md-5"}
                            ht={400}
                        ><BarChart /></DashboardCard>
                        <DashboardCard
                            title={"Illustrations"}
                            width={"col-12 col-sm-12 col-md-6"}
                            ht={500}
                        ><ContentTile /></DashboardCard>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Content;
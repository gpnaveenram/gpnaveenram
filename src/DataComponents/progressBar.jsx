// ProgressBar.js
import React from 'react';

const ProgressBar = ({ lebelName, percentage, classname }) => {


    return (
        <div style={{
            width: 400,
            marginTop: 0,
            marginBottom: 10
        }}>
            <div style={{
                maxWidth: 600,
                textAlign: 'left'
            }}><h4 className="small font-weight-bold" style={{
                marginLeft: 5,
                marginTop: 5
            }}>{lebelName}
                    <span className="float-right">{percentage}</span></h4>
                <div style={{ margin: 10 }} className="progress mb-4">
                    <div className={classname} role="progressbar" style={{ width: percentage }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;

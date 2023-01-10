import React from 'react';
import './index.scss';

interface Props {
    progress: number;
}

const Splash: React.FC<Props> = ({ progress }) => {
    return (
        <div className="container" id="splash">
            <img className="logo" src="/logo.png" alt="Logo" />
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
};

export default Splash;

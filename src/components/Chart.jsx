import React from 'react';
import { useChart } from '../context/ChartContext';
import Position from './Position';
import '../styles/App.css';

const Chart = () => {
    const { positions, addPosition } = useChart();

    const handleAddRoot = () => {
        const name = prompt('Enter Position Name:');
        if (name) {
            addPosition(null, { id: Date.now(), name, children: [] });
        }
    };

    return (
        <div className="chart-container">
            <h1>Organizational Chart</h1>
            <button className="add-root-btn" onClick={handleAddRoot}>
                Add Position
            </button>
            <div className="chart">
                {positions.length > 0 ? (
                    positions.map((pos) => <Position key={pos.id} position={pos} />)
                ) : (
                    <p>No Position Added</p>
                )}
            </div>
        </div>
    );
};

export default Chart;
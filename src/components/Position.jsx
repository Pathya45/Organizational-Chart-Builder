import React, { useState } from 'react';
import { useChart } from '../context/ChartContext';
import '../styles/Position.css';

const Position = ({ position }) => {
    const { addPosition, editPosition, deletePosition } = useChart();
    const [showChildren, setShowChildren] = useState(true);

    const handleAddChild = () => {
        const name = prompt('Enter Child Position Name:');
        if (name) {
            addPosition(position.id, { id: Date.now(), name, children: [] });
        }
    };

    const handleEdit = () => {
        const newName = prompt('Edit Position Name:', position.name);
        if (newName) {
            editPosition(position.id, { name: newName });
        }
    };

    function handleDelete() {
        if (window.confirm('You want to delete this position?')) {
            deletePosition(position.id);
        }
    }

    return (
        <div className="position">
            <div className="position-header">
                <h4>{position.name}</h4>
                <div className="position-actions">
                    <button className="action-btn" onClick={handleAddChild}>Add Child</button>
                    <button className="action-btn" onClick={handleEdit}>Edit</button>
                    <button className="action-btn delete-btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>

            {showChildren && position.children && (
                <div className="children">
                    {position.children.length > 0 ? (
                        position.children.map((child) => (
                            <Position key={child.id} position={child} />
                        ))
                    ) : (
                        <p>Add Child Components</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Position;
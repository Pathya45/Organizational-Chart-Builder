import React, { createContext, useContext, useState } from 'react';

const ChartContext = createContext();

export const useChart = () => useContext(ChartContext);

export const ChartProvider = ({ children }) => {
    const [positions, setPositions] = useState([]);

    const addPosition = (parentId, newPosition) => {
        if (!parentId) {
            setPositions([...positions, newPosition]);
        } else {
            const addChild = (positions) =>
                positions.map((pos) => {
                    if (pos.id === parentId) {
                        return { ...pos, children: [...pos.children, newPosition] };
                    } else if (pos.children.length > 0) {
                        return { ...pos, children: addChild(pos.children) };
                    }
                    return pos;
                });

            setPositions(addChild(positions));
        }
    };

    const editPosition = (id, updatedPosition) => {
        const updatePosition = (positions) =>
            positions.map((pos) =>
                pos.id === id ? { ...pos, ...updatedPosition } : pos
            );
        setPositions(updatePosition(positions));
    };

    const deletePosition = (id) => {
        const removePosition = (positions) =>
            positions.filter((pos) => pos.id !== id);

        const removeRecursively = (positions) =>
            positions.map((pos) => ({
                ...pos,
                children: removePosition(pos.children),
            })).filter(pos => pos.id !== id);

        setPositions(removeRecursively(positions));
    };

    return (
        <ChartContext.Provider value={{ positions, addPosition, editPosition, deletePosition }}>
            {children}
        </ChartContext.Provider>
    );
};
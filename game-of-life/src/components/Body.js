import React, { useCallback, useRef, useState, FC } from 'react';
import produce from 'immer';

const numRows = 50;
const numCols = 50;
const speed = 500;

const operations = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];



const resetGrid = () =>
  Array.from({ length: numRows }).map(() =>
    Array.from({ length: numCols }).fill(0),
  );

const seedGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
  }
  return rows;
};

const lightWeight= ()=>{
  const rows= Array.from({ length: numRows }).map(() =>
  Array.from({ length: numCols }).fill(0),)
  rows[20][21]=1
  rows[20][22]=1
  rows[20][23]=1
  rows[20][24]=1
  rows[21][24]=1
  rows[22][24]=1
  rows[23][23]=1
  rows[21][20]=1
  rows[23][20]=1
  return rows
}

const TenCells= ()=>{
  const rows= Array.from({ length: numRows }).map(() =>
  Array.from({ length: numCols }).fill(0),)
  rows[20][21]=1
  rows[20][22]=1
  rows[20][23]=1
  rows[20][24]=1
  rows[20][25]=1
  rows[20][26]=1
  rows[20][27]=1
  rows[20][28]=1
  rows[20][29]=1
  rows[20][30]=1
  return rows
}





const countNeighbors = (grid: any[][], x: number, y: number) => {
  return operations.reduce((acc, [i, j]) => {
    const row = (x + i + numRows) % numRows;
    const col = (y + j + numCols) % numCols;
    acc += grid[row][col];
    return acc;
  }, 0);
};

const Body: FC = () => {
  const [grid, setGrid] = useState(() => resetGrid());

  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);

  const runningRef = useRef(running);
  runningRef.current = running;

  const generationRef = useRef(generation);
  generationRef.current = generation;

  const runSimulation = useCallback(() => {
    setInterval(() => {
      if (!runningRef.current) {
        return;
      }

      setGrid((currentGrid) =>
        produce(currentGrid, (gridCopy) => {
          for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
              const count = countNeighbors(currentGrid, i, j);
              if (currentGrid[i][j] === 1 && (count < 2 || count > 3))
                gridCopy[i][j] = 0;
              if (!currentGrid[i][j] && count === 3) gridCopy[i][j] = 1;
            }
          }
        }),
      );
      setGeneration(++generationRef.current);
    }, speed);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          runningRef.current = !running;
          if (!running) {
            runSimulation();
          }
        }}
        style={{
            background: 'black',
        }}
      >
        {!running ? 'Start' : 'Stop'}
       
      </button>
      <button
        onClick={() => {
          setGrid(resetGrid());
          setGeneration(0);
        }}
        style={{
            background: 'black',
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          setGrid(seedGrid());
        }}
        style={{
            background: 'black',
        }}
      >
        Seed
      </button>
      <button
        onClick={() => {
          setGrid(lightWeight());
        }}
        style={{
            background: 'black',
        }}
      >
        Lightweight Spaceship
      </button>
      <button
        onClick={() => {
          setGrid(TenCells());
        }}
        style={{
            background: 'black',
        }}
      >
        10 cells row
      </button>
      <p style={{color: 'black'}}>Generation: {generation}</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, rowIdx) =>
          rows.map((col, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[rowIdx][colIdx] = grid[rowIdx][colIdx] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                marginLeft: '6rem',
                backgroundColor: grid[rowIdx][colIdx] ? '#003366' : '#eee',
                border: '1px solid black',
              }}
            />
          )),
        )}
      </div>
    </>
  );
};

export default Body;




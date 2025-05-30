// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
<div style={{ border: '1px solid #2f119b'}} className='rounded nodeContainer w-[200px] h-[120px] bg-[#473293] '>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div className='h-[25%] flex items-center justify-center bg-gradient-to-r from-[#2a0f8c] via-[#9788cd]  to-[#9788cd] ' >
        <span className='m-auto text-lg font-medium text-[#fff] '>Output</span>
      </div>
      <div className='h-[75%] flex flex-col justify-around p-2 '>
        <label className='text-[#fff] text-sm flex gap-3'>
          Name:
          <input className='bg-[#fff] rounded w-[60%]'
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label className='text-[#fff] text-sm'>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}

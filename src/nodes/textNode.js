// textNode.js

import { useCallback, useEffect, useState } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { getDynamicValues, getHandlePoint } from '../utils';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

 
  const updateNodeInternals = useUpdateNodeInternals();
  const [handleCount, setHandleCount] = useState(0);
  const [handlePoint, setHandlePoints] = useState([]);
  
  
    useEffect(()=> {
      
      const matches = currText.match(/{{(.*?)}}/g);
      const extractedWords = matches ? matches.map(match => match.replace(/{{|}}/g, '')) : [];
      console.log(extractedWords);

      extractedWords?.map((_)=> {
        setHandleCount(extractedWords?.length);
        updateNodeInternals(id);
      })
      setHandlePoints(getHandlePoint(extractedWords?.length))

    },[currText])

    



  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };
  console.log(handleCount);

  return (
    <div style={{ border: '1px solid #2f119b'}} className='rounded nodeContainer w-[200px] h-[120px] bg-[#473293] '>
      {Array.from({ length: handleCount }).map((_, index) => (
        <Handle
          key={index}
          type="target"
          position="left"
          id={`handle-${index}`}
          style={{top: `${handlePoint[index]}%`}}
        />
      ))}
       <div className='h-[25%] flex items-center justify-center bg-gradient-to-r from-[#2a0f8c] via-[#9788cd]  to-[#9788cd] ' >
        <span className='m-auto text-lg font-medium text-[#fff] '>Text</span>
      </div>
      <div className='h-[75%] flex flex-col justify-around p-2 '>
        <label className='text-[#fff] text-sm flex gap-3'>
          Text:
          <textarea  className='bg-[#fff] text-[#000]  rounded w-[60%]'
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}

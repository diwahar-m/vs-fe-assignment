// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div style={{ border: '1px solid #2f119b'}} className='rounded nodeContainer w-[200px] h-[120px] bg-[#473293] '>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      <div className='h-[25%] flex items-center justify-center bg-gradient-to-r from-[#2a0f8c] via-[#9788cd]  to-[#9788cd] ' >
        <span className='m-auto text-lg font-medium text-[#fff] '>LLM</span>
      </div>
      <div className='h-[75%] flex flex-col justify-center items-center p-2 '>
        <span className='text-[#fff] text-sm '>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
}

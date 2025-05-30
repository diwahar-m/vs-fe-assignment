// toolbar.js

import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { DraggableNode } from './draggableNode';
import { useForm } from "react-hook-form";
import { useStore } from './store';

const nodeLabel = {
	"customInput": "Input",
	"llm": "LLM",
	"customOutput": "Output",
	"text": "Text"
}

export const PipelineToolbar = () => {

	const {nodeList, setNodeList } = useStore();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({});
  const onSubmit = data => setNodeList(data);
    

    return (
        <div style={{ padding: '10px' }} className='flex justify-between items-center'  >
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }} className='flex justify-between items-center' >
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                {
                nodeList?.map((_)=> <DraggableNode key={crypto.randomUUID()} type={_?.nodeType} label={nodeLabel[_?.nodeType]} />)
                }
            </div>
            <Dialog.Root>
				<Dialog.Trigger>
					<Button>Create Node</Button>
				</Dialog.Trigger>
				<Dialog.Content maxWidth="450px">
				
					<Dialog.Title>New Node</Dialog.Title>
					<Dialog.Description size="2" mb="4">
						Please fill the details to create a node.
					</Dialog.Description>

					<form className='flex flex-col items-stretch gap-2 items-center' onSubmit={handleSubmit(onSubmit)}>
					<Flex direction="column" gap="3">
					<Dialog.Description size="2" >
						Node Type
					</Dialog.Description>
					<select {...register("nodeType")}>
						<option value="customInput">Custom Input</option>
						<option value="llm">LLM</option>
						<option value="customOutput">Custom Output</option>
						<option value="text">Text</option>
					</select>
				{/* <Button type='submit'>Submit</Button> */}
					</Flex>
					<Flex gap="3" mt="4" justify="end">
						<Dialog.Close>
							<Button variant="soft" color="gray">
								Cancel
							</Button>
						</Dialog.Close>
						<Dialog.Close>
							<Button type='submit'>Save</Button>
						</Dialog.Close>
					</Flex>

				</form>
				</Dialog.Content>
   
            </Dialog.Root>
        </div>
    );
};

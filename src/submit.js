// submit.js

import { Button } from "@radix-ui/themes";
import { useStore } from "./store";
import { ToastContainer, toast } from 'react-toastify';

export const SubmitButton = () => {
    const {
          nodes,
          edges,
        } = useStore()


        const handleSubmit=async ()=> {
            const data={nodes, edges}
            const formData = new URLSearchParams();
            formData.append('pipeline', JSON.stringify({nodes, edges})); 
            try {
                const response = await fetch('http://127.0.0.1:8000/pipelines/parse/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                   body: JSON.stringify({
                    nodes: nodes,
                    edges: edges
                  }),
                  //  body: JSON.stringify({name:'Alice', age: 30}),
                });
            
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
            
                const result = await response.json();
                console.log(result);
                toast(`Number of nodes : ${result?.num_nodes}; Number of edges: ${result?.num_edges}; Is Directed Acyclic Graph : ${result?.is_dag} `)

                return result;
              } catch (error) { console.log(error)}
        }


    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button type="button" onClick={handleSubmit}>Submit</Button>
            <ToastContainer />
        </div>
    );
}

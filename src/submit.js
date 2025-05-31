// submit.js

import { Button } from "@radix-ui/themes";
import { useStore } from "./store";

export const SubmitButton = () => {
    const {
          nodes,
          edges,
        } = useStore()


        const handleSubmit=async ()=> {
            console.log(" hbvjhberhv whvbwvbwkbv");
            const data={nodes, edges}
            try {
                const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data)
                });
            
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
            
                const result = await response.json();
                console.log('Success:', result);
                return result;
              } catch (error) { console.log(error)}
        }


    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button type="button" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

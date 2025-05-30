import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";


function App() {
  return (
    <div>
      <Theme>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      </Theme>
    </div>
  );
}

export default App;

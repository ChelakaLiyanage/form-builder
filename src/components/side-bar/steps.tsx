import { useFormStore } from "@/store/form-store";
import { Button } from "../ui/button";

export function Steps() {
  const steps = useFormStore((state) => state.steps);
  const setPreview = useFormStore((state) => state.setPreview);
  const welcomeField = useFormStore((state) => state.welcomeField);


  const handleEditWelcome = () =>{
    setPreview({type: "WELCOME",previewData:{...welcomeField}})
  }

  return (
    <div className="flex flex-col gap-2">
      <Button variant={"secondary"} onClick={()=> handleEditWelcome()}>Welcome Screen</Button>
      {steps.map((step) => (
        <Button key={step.id} variant={"secondary"}>
          {step.title}
        </Button>
      ))}
    </div>
  );
}

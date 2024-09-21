import { useFormStore } from "@/store/form-store";
import { Button } from "../ui/button";

export function Steps() {
  const steps = useFormStore((state) => state.steps);
  return (
    <div className="flex flex-col gap-2">
      <Button variant={"secondary"}>Welcome Screen</Button>
      {steps.map((step) => (
        <Button key={step.id} variant={"secondary"}>
          {step.title}
        </Button>
      ))}
    </div>
  );
}

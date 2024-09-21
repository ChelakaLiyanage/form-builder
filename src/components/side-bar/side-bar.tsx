import { useFormStore } from "@/store/form-store";
import { Steps } from "./steps";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

export function SideBar() {
  const preview = useFormStore((state) => state.preview);

  if (!preview) {
    return (
      <div>
        <h3 className="px-4 font-semibold text-sm mb-2 mt-2">Steps</h3>
        <div className="px-4">
          <Steps />
        </div>
        <Button className="mt-2"><PlusIcon className="mr-2 h-4 w-4"/>Email Field</Button>
      </div>
    );
  }
  return <div>Step Settings</div>;
}

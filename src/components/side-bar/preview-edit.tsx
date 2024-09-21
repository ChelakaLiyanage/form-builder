import { useFormStore } from "@/store/form-store";
import { Button } from "../ui/button";
import {  XIcon } from "lucide-react";

export function PreviewEdit() {
  const preview = useFormStore((state) => state.preview);
  const setPreview = useFormStore((state) => state.setPreview);

  if (!preview) {
    return null;
  }
  const handleClose = () => {
    setPreview(null);
  };

  const heading =
    preview.type === "WELCOME"
      ? "Edit Welcome Screen"
      : preview.type === "STEP"
      ? "Edit Step"
      : "New Step";

  return (
    <div>
      <div className="flex pt-2">
        <h3 className="px-4 font-semibold text-sm mb-2 mt-2 flex-grow">
          {heading}
        </h3>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="mr-2"
          onClick={() => handleClose()}
        >
          <XIcon />
        </Button>
      </div>
      <div className="px-4">Editor</div>
    </div>
  );
}

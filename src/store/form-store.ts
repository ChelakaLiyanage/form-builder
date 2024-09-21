import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FormStep {
  id: number;
  type: "Email";
  title: string;
  description: string;
  required: boolean;
}

export interface WelcomeField {
  title: string;
  description: string;
  buttonText: string;
}

type Preview = {
  type: "WELCOME" | "STEP" | "NEW";
  previewData: WelcomeField | FormStep;
} | null;

interface FormState {
  preview: Preview;
  setPreview: (preview: Preview) => void;
  lastId: number;
  getNewId: () => number;
  welcomeField: WelcomeField;
  steps: FormStep[];
  addStep: (formStep: FormStep) => void;
  updateStep: (formStep: FormStep) => void;
  deleteStep: (formStep: FormStep) => void;
}

export const useFormStore = create<FormState>()(
  persist(
    (set, get) => ({
      preview:null,
      setPreview:(preview) =>{
        set(() => ({preview}))
      },
      lastId: 0,
      getNewId: () => {
        const newId = get().lastId + 1;
        set((state) => ({ lastId: state.lastId + 1 }));
        return newId;
      },
      welcomeField: {
        title: "Welcome to our form",
        description: "This is the description",
        buttonText: "Start",
      },
      steps: [],
      addStep: (formStep) => {
        set((state) => {
          const id = get().getNewId();
          const newSteps = [...state.steps, { ...formStep, id }];
          return { steps: newSteps };
        });
      },
      updateStep: (formStep) => {
        set((state) => {
          const index = state.steps.findIndex(
            (step) => step.id === formStep.id
          );
          const oldSteps = state.steps;
          const updatedSteps = [
            ...oldSteps.slice(0, index),
            formStep,
            ...oldSteps.slice(index + 1),
          ];
          return { steps: updatedSteps };
        });
      },
      deleteStep: (formStep) => {
        set((state) => {
          const index = state.steps.findIndex(
            (step) => step.id === formStep.id
          );
          const oldSteps = state.steps;
          const newSteps = [
            ...oldSteps.slice(0, index),
            ...oldSteps.slice(index - 1),
          ];
          return { steps: newSteps };
        });
      },
    }),
    {
      name: "form-store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !["preview"].includes(key)
          )
        ),
    }
  )
);

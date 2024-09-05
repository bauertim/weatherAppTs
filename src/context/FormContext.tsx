import { createContext, PropsWithChildren, useContext, useState } from "react";

type FormContextType = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const FormContext = createContext<FormContextType>({
  inputValue: "",
  setInputValue: () => {},
});

export const FormContextProvider = ({ children }: PropsWithChildren) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <FormContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === null) {
    throw Error("cant use it outside of Formcontextprovider");
  }
  return context;
}

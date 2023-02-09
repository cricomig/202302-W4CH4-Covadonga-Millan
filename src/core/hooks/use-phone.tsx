import { useState } from "react";

export type UsePhoneStructure = ReturnType<typeof usePhone>;
export function usePhone() {
  const initialState: string = "";

  const [keyboard, setKeyboard] = useState(initialState);

  const handlerClickNumber = (number: string) => {
    setKeyboard(keyboard + number);
  };

  return {
    keyboard,
    handlerClickNumber,
  };
}

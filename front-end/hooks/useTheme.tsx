import { extendTheme } from "@chakra-ui/react";
import React from "react";

const useExtendedTheme = () => {
  const extendedTheme = extendTheme({});
  return extendedTheme;
};

export default useExtendedTheme;

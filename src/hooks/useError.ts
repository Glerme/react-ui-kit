import { useContext } from "react";

import {
  ErrorContext,
  ErrorContextProps,
  ErrorProps,
  ErrorProvider,
} from "../contexts/ErrorContext";

export const useError = () => useContext(ErrorContext);

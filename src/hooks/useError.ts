import { useContext } from "react";

import {
  ErrorContext,
  ErrorContextProps,
  ErrorProps,
  ErrorProvider,
} from "../contexts/ErrorContext";

const useError = () => useContext(ErrorContext);

export default useError;

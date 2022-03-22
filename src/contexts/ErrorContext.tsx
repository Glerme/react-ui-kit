import { createContext, useState } from "react";

export interface ErrorProps {
  isErrored: boolean;
  error: Error | null;
  seeDetails: boolean;
}

export interface ErrorContextProps {
  error: ErrorProps | null;
  setError: (error: ErrorProps) => void;
  withErrorHandling: <Args extends any[]>(
    fn: (...args: Args) => Promise<void>
  ) => (...args: Args) => Promise<void>;
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: {
    error: null,
    isErrored: false,
    seeDetails: false,
  },
  setError: () => {},
  withErrorHandling: (fn) => fn,
});

export const ErrorProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<ErrorProps>({
    isErrored: false,
    error: null,
    seeDetails: false,
  });

  const withErrorHandling =
    <Args extends any[]>(fn: (...args: Args) => Promise<void>) =>
    async (...args: Args) => {
      try {
        await fn(...args);
      } catch (err: any) {
        setError({
          isErrored: true,
          error: err,
          seeDetails: false,
        });

        throw err;
      }
    };

  return (
    <ErrorContext.Provider value={{ error, setError, withErrorHandling }}>
      {error.isErrored && (
        <></>
        // <ModalError
        //   error={error}
        //   onClose={() =>
        //     setError({ isErrored: false, error: null, seeDetails: false })
        //   }
        //   onShowDetails={() =>
        //     setError({ ...error, seeDetails: !error.seeDetails })
        //   }
        // />
      )}
      {children}
    </ErrorContext.Provider>
  );
};

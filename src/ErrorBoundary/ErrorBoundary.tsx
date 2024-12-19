import React, { ReactNode } from "react";

interface IError {
  isError: boolean;
}

interface IErrorProps {
  fallback: ReactNode;
  children: ReactNode;
}

class ErrorBoundary extends React.Component<IErrorProps> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError(): IError {
    return { isError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Error =>", error);
    console.log("ErrorInfo =>", errorInfo);
  }

  render() {
    if (this.state.isError) {
      return this?.props?.fallback;
    }
    return this?.props?.children;
  }
}

export default ErrorBoundary;

import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children: ReactNode;
  // hasError: boolean;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
  // constructor(props: Readonly<Props>) {
  //   super(props);
  //   this.state = { hasError: false };
  // }
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Navigate to="/error" />;
    }
    return this.props.children;
  }
}


import React, { Component } from "react";

interface AppErrorBoundaryProps {
  children?: Array<any>;
}

class AppErrorBoundary extends Component<any> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: any, info: any) {
    if (error) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <div className="alert alert-danger">Something went wrong...</div>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

export default AppErrorBoundary;

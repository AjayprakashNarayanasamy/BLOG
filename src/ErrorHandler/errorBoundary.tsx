import React from 'react';
type MyProps = {
  fallback: string;
  children: React.ReactNode;
};

class MyErrorBoundaryExample extends React.Component<MyProps> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error:any) {
    // Update state so next render shows fallback UI.
    return { error: error };
  }

  componentDidCatch(error:any, info:any) {
    console.log("error, info" , error, info )
    // Log the error to an error reporting service

  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>{this.props.fallback}</p>;
    }
    return <>{(this.props as any).children}</> ;
  }
}

export default MyErrorBoundaryExample;
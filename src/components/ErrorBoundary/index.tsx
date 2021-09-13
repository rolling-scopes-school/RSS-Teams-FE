import React, { Component } from 'react';
import { BoundryContainer } from './styled';

interface ErrorBoundaryState {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends Component<any, ErrorBoundaryState> {
  state = { error: null, errorInfo: null };

  static getDerivedStateFromError(error: any, errorInfo: any) {
    return { error: error, errorInfo: errorInfo };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  handleReload() {
    location.reload();
  }

  render() {
    const { children } = this.props;

    if (this.state.errorInfo) {
      return (
        <BoundryContainer onClick={this.handleReload}>
          Something went wrong.
          <br /> Click on the page to reload it.
        </BoundryContainer>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

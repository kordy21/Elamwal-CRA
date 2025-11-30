import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: "center" }}>
          <h1>حدث خطأ بالموقع</h1>
          <p>نعتذر، حاول تحديث الصفحة.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

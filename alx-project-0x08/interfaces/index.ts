import * as React from "react";

// Define a common interface for React components that accept children
// This ensures type safety for components that render child elements
export interface ReactComponentProps {
  children: React.ReactNode; // Represents any valid React node (elements, strings, fragments, etc.)
}

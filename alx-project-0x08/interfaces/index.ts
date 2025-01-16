import * as React from "react";
import { ReactNode } from "react";

// Define a common interface for React components that accept children
// This ensures type safety for components that render child elements
export interface ReactComponentProps {
  children:ReactNode; 
}

export interface GeneratedImageProps{
  imageUrl:string
  prompt:string
  width?:string
  height?:string
  action: (imagePath: string) => void
}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">
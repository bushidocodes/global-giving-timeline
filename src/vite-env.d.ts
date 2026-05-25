/// <reference types="vite/client" />

// react-player 0.25.3 ships no types; declare the module to satisfy tsc.
declare module "react-player" {
  import React from "react";
  interface ReactPlayerProps {
    url?: string;
    height?: string | number;
    controls?: boolean;
    [key: string]: unknown;
  }
  export default class ReactPlayer extends React.Component<ReactPlayerProps> {}
}

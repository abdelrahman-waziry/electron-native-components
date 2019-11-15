import * as React from "react";
export declare namespace NativeComponents {
  interface Props extends React.Attributes {
    /**
     * Set a class for the root component.
     */
    className?: string;
    /**
     * Callback called when the component is clicked.
     */
    onClick?: Function;
    /**
     * Callback called when the component context menu is clicked.
     */
    onContextMenu?: Function;
    /**
     * Set inline style for the root component.
     */
    style?: React.CSSProperties;
  }
}

export default NativeComponents;
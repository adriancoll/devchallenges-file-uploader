import React, { PropsWithChildren } from "react";
import * as ReactDOM from "react-dom";

const headRoot = document.head;

export default class Head extends React.Component<PropsWithChildren> {
  public render() {
    return ReactDOM.createPortal(this.props.children, headRoot);
  }
}

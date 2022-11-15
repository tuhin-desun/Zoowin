import React from "react";
import AppContext from "./AppContext";
// import { readCustomerData } from "../utils/Util";

export default class GlobalState extends React.Component {
  constructor(props) {
    super(props);

    this.setUrl = (data) => this.setState({ url: data });

    this.state = {
      url: props.url,
    };
  }

  render = () => (
    <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  );
}

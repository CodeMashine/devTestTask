import React, { Component } from "react";
import TextInputWithActions from "./TextInputWithActions";

export default class UniversalInput extends Component {
  // state = {
  //   shouldProcess: false
  // };

  onChange = value => {
    this.props.onChange && this.props.onChange(value);
    // this.props.eventable && this.setState({ shouldProcess: true });
  };

  // onEndEditing = (value) => {
  //   this.props.onEndEditing && this.props.onEndEditing(value);
  //   this.setState({ shouldProcess: false });
  // };

  render() {
    const {
      // updateProcess,
      // actions,
      ...props
    } = this.props;
    // let { shouldProcess } = this.state;
    // const inProcess = updateProcess && updateProcess.get("inProcess");

    // const newActions = [...(actions || [])];
    // if (shouldProcess || inProcess) {
    //   newActions.push(
    //     <span
    //       className={cn(styles.actionIcon, {
    //         [styles.actionIconGray]: inProcess
    //       })}
    //       title={inProcess ? "" : "ready to send"}
    //     >
    //     </span>
    //   );
    // }
    return (
      <TextInputWithActions
        {...props}
        // onEndEditing={this.onEndEditing}
        onChange={this.onChange}
        // actions={newActions}
      />
    );
  }
}


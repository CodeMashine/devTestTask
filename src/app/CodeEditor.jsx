import { Component } from "react";
import { Input } from "antd";

const { TextArea } = Input;


export default class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange && this.props.onChange(value);
  };

  onBlur = () => {
    this.props.onBlur && this.props.onBlur(this.state.value);
  };

  render() {
    const { className, style } = this.props;
    const { value } = this.state;

    return (
      <TextArea
        rows={4}
        ref={this.props.inputRef}
        value={value}
        onChange={this.onChange}
        onBlur={this.onBlur}
        className={className}
        style={style}
      />
    );
  }
}


CodeEditor.propTypes = {
  onChange: Function,
  onBlur:Function,
  className: String ,
  style: String ,
  inputRef: Object
}
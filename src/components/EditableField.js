import React from "react";

export default class EditableField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  render() {
    return (
      <input
        className={this.props.className}
        autoFocus
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={(e) => {
          this.setState({
            value: e.target.value,
          });
          this.props.onFieldChange(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            this.props.onFieldSubmit(e);
          }
        }}
        onBlur={(e) => {
          this.props.onFieldSubmit(e);
        }}
      />
    );
  }
}

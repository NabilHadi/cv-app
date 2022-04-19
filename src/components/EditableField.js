import React from "react";

export default class EditableField extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.icon}
        <input
          className={this.props.className}
          autoFocus
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onFieldChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.props.onFieldSubmit(e);
            }
          }}
          onBlur={this.props.onFieldSubmit}
        />
      </div>
    );
  }
}

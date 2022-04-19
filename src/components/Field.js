import React from "react";

export default class Field extends React.Component {
  render() {
    return (
      <div className={this.props.className} onClick={this.props.onFieldClick}>
        {this.props.textContent === ""
          ? this.props.placeHolder
          : this.props.textContent}
      </div>
    );
  }
}

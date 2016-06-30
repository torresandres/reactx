import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string
  };

  render() {
    return <i data-icon className={this.props.className} data-size={this.props.size || 24}>{this.props.name}</i>;
  }
}

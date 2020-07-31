import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
      return (
        <article>
          <h2>{this.props.title} ㅋㅋㅋ</h2>
          {this.props.desc}
        </article>
      )
    }
}

export default ReadContent;
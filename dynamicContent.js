// enforces stricter parsing and error handling on the code at runtime
'use strict';

//import React from "react";
// as of 2020 this import is not needed
// https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

//import ReactDOM from "react-dom/client";

// No Intellisense? Try:
// npm install --save @types/react
// AND
// npm install --save @types/react-dom

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#dynamicContentContainer');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
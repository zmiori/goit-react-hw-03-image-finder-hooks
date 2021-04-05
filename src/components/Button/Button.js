import React from 'react';
import './Button.css';

const Button = props => {
  const { loadMore } = props;
  return (
    <button type="button" className="Button" onClick={loadMore}>
      Load More
    </button>
  );
};

export default Button;

// ====== CLASSES =====
// import { Component } from 'react';
// class Button extends Component {
//   render() {
//     const { loadMore } = this.props;
//     return (
//       <button type="button" className="Button" onClick={loadMore}>
//         Load More
//       </button>
//     );
//   }
// }

import React from 'react';
import './Loader.css';

import Loader from 'react-loader-spinner';

export default class MyLoader extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#3F51B5"
        height={80}
        width={80}
        className="Loader"
      />
    );
  }
}

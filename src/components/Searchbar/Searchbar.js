import { useState } from 'react';
import './Searchbar.css';

const Searchbar = props => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
    return searchQuery;
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(searchQuery);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={e => handleSubmit(e)}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={e => handleChange(e)}
        />
      </form>
    </header>
  );
};

export default Searchbar;

// =======CLASSES============
// import { Component } from 'react';
// class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value });
//     return this.state.searchQuery;
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.searchQuery);
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchQuery}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

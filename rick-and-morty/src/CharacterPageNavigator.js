import React from 'react';
import PropTypes from 'prop-types';

export default class CharacterPageNavigator extends React.Component {
  static propTypes = {
    characterListPageNumber: PropTypes.number.isRequired,
    info: PropTypes.shape({
      count: PropTypes.number,
      next: PropTypes.string,
      pages: PropTypes.number,
      prev: PropTypes.string,
    }),
    setCharacterListPageNumber: PropTypes.func.isRequired,
  }

  handleNextPrevClick = (e) => {
    this.props.setCharacterListPageNumber(e.target.value)
  }

  render() {
    const { characterListPageNumber } = this.props
    const { pages } = this.props.info;
    const pageNumbers = [...Array(pages).keys()]

    return (
      <div className={'character-list-navigator'}>
        <span>Go to page:</span>
        <button value={1}
                onClick={this.handleNextPrevClick}
                disabled={characterListPageNumber === 1}>First</button>
        <button value={characterListPageNumber - 1}
                onClick={this.handleNextPrevClick}
                disabled={characterListPageNumber === 1}>Prev</button>
        <select name={'page-selector'}
                value={characterListPageNumber}
                onChange={this.handleNextPrevClick}
        >
          {pageNumbers.map(pageNumber=> (
            <option
              value={pageNumber+1}
              key={`page-number${pageNumber}`}
            >
              {pageNumber+1}
            </option>
          ))}
        </select>
        <button value={characterListPageNumber + 1}
                onClick={this.handleNextPrevClick}
                disabled={characterListPageNumber === pages}>Next</button>
        <button value={pages}
                onClick={this.handleNextPrevClick}
                disabled={characterListPageNumber === pages}>Last</button>
      </div>
    )
  }
}

import React from 'react';
import {number, func} from 'prop-types'
import './ListPagination.css';

export default class ListPagination extends React.Component {
  static propTypes = {
    currentPage: number.isRequired,
    pageCount: number.isRequired,
    onGetPage: func.isRequired,
  }

  computePrevPageNumber = () => this.props.currentPage - 1;
  computeNextPageNumber = () => this.props.currentPage + 1;

  render() {
    const {currentPage, pageCount, onGetPage} = this.props;

    const pageButtons = [];
    let pageButton;
    for(let i=1; i<=pageCount; i++) {
      pageButton = (currentPage === i)
        ? <button key={i} value={i} className="btn-page-number btn-active-page">{i}</button>
        : <button key={i} value={i} className="btn-page-number" onClick={(e) => onGetPage(+e.target.value)}>{i}</button>
      pageButtons.push(pageButton);
    }

    return (
      <nav className="nav-pagination">
        <div>
          {(currentPage > 1) && 
            <button className="btn-prev" onClick={onGetPage.bind(this, this.computePrevPageNumber())}>
              <span>Prev</span>
            </button>}
        </div>
        {pageButtons}
        <div>
          {(currentPage < pageCount) && 
            <button className="btn-next" onClick={onGetPage.bind(this, this.computeNextPageNumber())}>
              <span>Next</span>
            </button>}
        </div>
      </nav>
    )
  }
}
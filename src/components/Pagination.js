import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
    static propTypes = {
        nextPage: PropTypes.func,
        prevPage: PropTypes.func,
        totalPages: PropTypes.number,
        currentPage: PropTypes.number
    }

    render() {
        const {nextPage, prevPage, totalPages, currentPage } = this.props;
        const currentPageStyle = {color: "black", backgroundColor: "white", borderRadius: "2px" }
        return (
            <React.Fragment>
                {totalPages > 1 ? <nav className="pagination">
                    <ul>
                        <li onClick={prevPage}>Previous</li>
                        <li style={currentPage - 1 === 0 ? currentPageStyle : null} >{currentPage - 1 === 0 ? currentPage : currentPage + 1 <= totalPages ? currentPage - 1 : currentPage - 2}</li>
                        <li style={currentPage - 1 > 0 && currentPage + 1 <= totalPages ? currentPageStyle : null } >{currentPage - 1 === 0 ? currentPage + 1 : currentPage + 1 <= totalPages ? currentPage : currentPage - 1}</li>
                        <li style={currentPage === totalPages ? currentPageStyle : null } >{currentPage - 1 === 0 ? currentPage + 2 : currentPage + 1 <= totalPages ? currentPage + 1 : currentPage}</li>
                        <li onClick={nextPage}>Next</li>
                    </ul>
                </nav> : null}
            </React.Fragment>
        )
    }
}

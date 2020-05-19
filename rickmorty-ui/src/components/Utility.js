import React from 'react';

export default class Utility extends React.Component {
  static get apiErrorCode() {
    return '[API ERROR]';
  }

  static get baseUrl() {
    return 'https://rickandmortyapi.com/api/character/';
  }

  static get loadingIndicator() {
    return <div>Loading...</div>;
  }
}
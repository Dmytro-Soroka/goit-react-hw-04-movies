import React, { Component } from 'react';
import styles from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => this.setState({ search: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;

    if (search.trim() === '') {
      return toast.error('введите запрос');
    }
    this.props.onSearch(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={styles.searchButton}>
          <span>Search</span>
        </button>
      </form>
    );
  }
}

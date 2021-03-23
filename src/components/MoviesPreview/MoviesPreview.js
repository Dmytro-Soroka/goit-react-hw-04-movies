import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesPreview.module.css';

function MoviesPreview({ title, imgUrl }) {
  return (
    <>
      <div className={styles.containerImage}>
        <img className={styles.image} src={imgUrl} alt={title} />
      </div>
      <div className={styles.containerTitle}>
        <p className={styles.title}>{title}</p>
      </div>
    </>
  );
}

MoviesPreview.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default MoviesPreview;
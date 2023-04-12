import PropTypes from 'prop-types';

import styles from './Container.module.css';

function Container({ bgColor, children }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;

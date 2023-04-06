import styles from './Container.module.css';

export function Container({ bgColor, children }) {
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

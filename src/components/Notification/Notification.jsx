import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export default Notification = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);

Notification.propTypes = {
    message: PropTypes.string,
}

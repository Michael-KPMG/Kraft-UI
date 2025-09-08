import styles from './GenerateCopyButton.module.scss';
import Cal from '../../assets/cal_icon.svg';
import copy from '../../assets/copy.svg';

export default function GenerateCopyButton() {
  return (
    <div>
      <button className={styles.generateCopyBtn}>
        Generate the Copy
        <img
          src={copy}
          alt="copy"
          width={24}
          height={24}
          className={styles.icon} // Optional: reuse or customize your styles
        />
      </button>

      <h3 className={styles.header}>
        <img
          src={Cal}
          alt="Calendar icon"
          width={34}
          height={34}
          className={styles.icon} // Optional: reuse or customize your styles
        />
        Content
      </h3>
    </div>
  );
}

import styles from './Header.module.scss';
import { ReactComponent as LogoSVG } from '../../assets/svg/logo.svg';
import { ReactComponent as AlarmSVG } from '../../assets/svg/alarm.svg';
import { ReactComponent as PlusSVG } from '../../assets/svg/add_plus.svg';

function Header() {
  return (
    <header className={styles.Header}>
      <div>
        <LogoSVG />
      </div>
      <div className={styles.btns}>
        <button className={styles.btn}>
          <AlarmSVG />
        </button>
        <button className={styles.btn}>
          <PlusSVG />
        </button>
      </div>
    </header>
  )
}

export default Header;
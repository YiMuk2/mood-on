import styles from './Footer.module.scss';
import profileIMG from '../../assets/img/profile.png';
import { ReactComponent as HomeSVG } from '../../assets/svg/home.svg';
import { ReactComponent as SearchSVG } from '../../assets/svg/search.svg';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <button>
        <HomeSVG />
      </button>
      <div className={styles.search}>
        <input type="text"/>
        <SearchSVG className={styles['inner-icon']}/>
      </div>
      <div className={styles.profile}>
        <img src={profileIMG} alt="profile"/>
      </div>
    </footer>
  )
}

export default Footer;
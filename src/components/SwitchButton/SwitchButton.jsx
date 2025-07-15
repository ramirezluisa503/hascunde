import { useTranslation } from 'react-i18next';
import styles from './SwitchButton.module.css';

export const SwitchButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={styles.btnContainer}>
      <label className={`${styles.switch} ${styles.btnColorModeSwitch}`}>
        <input
          value="1"
          id="color_mode"
          name="color_mode"
          type="checkbox"
          onClick={toggleLanguage}
        />
        <label
          className={styles.btnColorModeSwitchInner}
          data-off="Esp"
          data-on="Eng"
          htmlFor="color_mode"
        ></label>
      </label>
    </div>
  );
};

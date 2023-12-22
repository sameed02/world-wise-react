import Map from "./Map";
import Logo from "./Logo";

import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Map />
    </div>
  );
}

export default Sidebar;

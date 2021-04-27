// import logo from "./logo.svg";
import styles from "./App.module.scss";
import { Table } from "./Table/Table";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appBody}>
        <Table />
      </div>
    </div>
  );
}

export default App;

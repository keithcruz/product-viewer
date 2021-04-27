import React, { useState, useEffect } from "react";
import { Row } from "../Row/Row";
import { getData } from "../../api";
import styles from "./Table.module.scss";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <>
      <div className={styles.dataTitle}>
        <h2>User Product Data</h2>
      </div>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Products</th>
            <th>PIDs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Row
              key={item.username}
              username={item.username}
              realname={item.realname}
              productIds={item.productIds}
              products={item.products}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export { Table };

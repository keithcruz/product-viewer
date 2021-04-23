import React, { useState, useEffect } from "react";
import { Row } from "../Row/Row";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((raw) => raw.json())
      .then((json) => setData(json));
  }, []);

  return (
    <table>
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
  );
}

export { Table };

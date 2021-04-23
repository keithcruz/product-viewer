import React from "react";

function Row({ realname, username, productIds, products }) {
  return (
    <tr>
      <td>{realname}</td>
      <td>{username}</td>
      <td>{productIds}</td>
      <td>{products}</td>
    </tr>
  );
}

export { Row };

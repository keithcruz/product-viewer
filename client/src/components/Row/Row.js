import React from "react";

function Row({ realname, username, productIds, products }) {
  return (
    <tr>
      <td data-title={"Username"}>{username}</td>
      <td data-title={"Name"}>{realname}</td>
      <td data-title={"Products"}>{products}</td>
      <td data-title={"PIDS"}>{productIds}</td>
    </tr>
  );
}

export { Row };

import React from "react";
import { Cards_ } from "./AdminCard";
import Editable2 from "./AdminTable2";

function AdminDashboard() {
  return (
    <div>
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <Cards_ />
      </div>

      <Editable2 />
    </div>
  );
}

export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchFeature from "./searchFeature";

import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.surname}, {props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>{props.record.certifications}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
   const [SearchTerms, setSearchTerms] = useState("")

  const updateSearchTerms = (newSearchTerm) => {
    setSearchTerms(newSearchTerm)
  } 

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:8080/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return; 
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:8080/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Add User
              </NavLink>
            </li>
          </ul>
      </div>
      </nav>
      
      <h3>Faculty Records</h3>
      <div style={{ display:'flex', justifyContent:'flex-end', margin:'1rem auto' }}>
        <SearchFeature 
          refreshFunction={updateSearchTerms}
        />

      </div>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Documentations</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}

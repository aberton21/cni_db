import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    certifications: "",
    cni_email: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ name: "", position: "", level: "", certifications: "", cni_email: "",});
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Department/Program</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            required
            onChange={(e) => updateForm({ position: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cni_email">Email: </label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.cni_email}
            required
            onChange={(e) => updateForm({ cni_email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="certifications">Documentations: </label>
          <input
            type="text"
            className="form-control"
            id="certifications"
            value={form.certifications}
            onChange={(e) => updateForm({ certifications: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionFaculty"
              value="Faculty"
              checked={form.level === "Faculty"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionFaculty" className="form-check-label">Faculty</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionStaff"
              value="Staff"
              checked={form.level === "Staff"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionStaff" className="form-check-label">Staff</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionStudent"
              value="Student"
              checked={form.level === "Student"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionStudent" className="form-check-label">Student</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>

      </form>
    </div>
  );
}

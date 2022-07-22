import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    number: "",
    position: "",
    vet_status: "",
    dob: "",
    level: "",
    cni_email: "",
    address: "",
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

    setForm({ name: "", surname: "", number: "", position: "", vet_status: "", dob: "", level: "", cni_email: "", address: "",});
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            required
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={form.surname}
            required
            onChange={(e) => updateForm({ surname: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cni_email">Email: </label>
          <input
            type="email"
            className="form-control"
            id="cni_email"
            value={form.cni_email}
            required
            onChange={(e) => updateForm({ cni_email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Department: </label>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentExecutives"
              value="Executives"
              checked={form.position === "Executives"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentExecutives" className="form-check-label">Executives</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentFA"
              value="Financial Aid"
              checked={form.position === "Financial Aid"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentFA" className="form-check-label">Financial Aid</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentAdmissions"
              value="Admissions"
              checked={form.position === "Admissions"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentAdmissions" className="form-check-label">Admissions</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentCS"
              value="Career Services"
              checked={form.position === "Career Services"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentCS" className="form-check-label">Career Services</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentRegistrar"
              value="Registrar"
              checked={form.position === "Registrar"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentRegistrar" className="form-check-label">Registrar</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentIT"
              value="Information Technology"
              checked={form.position === "Information Technology"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentIT" className="form-check-label">Information Technology</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentNursing"
              value="Nursing"
              checked={form.position === "Nursing"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentNursing" className="form-check-label">Nursing</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="departmentOptions"
              id="departmentEducation"
              value="Education"
              checked={form.position === "Education"}
              required
              onChange={(e) => updateForm({ position: e.target.value })}
            />
            <label htmlFor="departmentEducation" className="form-check-label">Education</label>
          </div>
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="position">Position: </label>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionFaculty"
              value="Faculty"
              checked={form.level === "Faculty"}
              required
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
              required
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionStaff" className="form-check-label">Staff</label>
          </div>
        </div>
        </div>
        <h3>Personal Information</h3>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={form.address}
            onChange={(e) => updateForm({ address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            id="number"
            value={form.number}
            onChange={(e) => updateForm({ number: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="vet_status">Veteran?: </label>
        
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="vet_statusOptions"
              id="vet_statusYes"
              value="Yes"
              checked={form.vet_status === "Yes"}
              onChange={(e) => updateForm({ vet_status: e.target.value })}
            />
            <label htmlFor="vet_statusYes" className="form-check-label">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="vet_statusOptions"
              id="vet_statusNo"
              value="No"
              checked={form.vet_status === "No"}
              onChange={(e) => updateForm({ vet_status: e.target.value })}
            />
            <label htmlFor="vet_statusNo" className="form-check-label">No</label>
          </div>
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={form.dob}
            onChange={(e) => updateForm({ dob: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
        <div className="form-group">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

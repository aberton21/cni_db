import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    certifications: "",
    cni_email: "",
    //gender: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
      certifications: form.certifications,
      cni_email: form.cni_email,
      //gender: form.gender,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="cni_email">Email</label>
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
          <label htmlFor="position">Department</label>
        </div>
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
        <div className="form-group">
          <label htmlFor="position">Position</label>
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
        <div className="form-group">
          <label htmlFor="certifications">Documentations</label>
          <input
            type="text"
            className="form-control"
            id="certifications"
            value={form.certifications}
            onChange={(e) => updateForm({ certifications: e.target.value })}
          />
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
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

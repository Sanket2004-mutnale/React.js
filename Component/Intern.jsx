import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

function Intern() {
  const [interns, setInterns] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dob: "",
    education: "",
    startDate: "",
    endDate: "",
    skills: "",
    comments: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedInterns = interns.map((intern, index) =>
        index === editIndex ? formData : intern
      );
      setInterns(updatedInterns);
      setEditIndex(null);
    } else {
      setInterns([...interns, formData]);
    }
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      dob: "",
      education: "",
      startDate: "",
      endDate: "",
      skills: "",
      comments: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(interns[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedInterns = interns.filter((_, i) => i !== index);
    setInterns(updatedInterns);
  };

  return (
    <div>
      <h2>Intern Information Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="education">
          <Form.Label>Education Qualification</Form.Label>
          <Form.Control
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="startDate">
          <Form.Label>Internship Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>Internship End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="skills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="comments">
          <Form.Label>Comments/Feedback</Form.Label>
          <Form.Control
            as="textarea"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          {editIndex !== null ? "Update" : "Submit"}
        </Button>
      </Form>

      <h2 className="mt-5">Intern Information Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Education</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Skills</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern, index) => (
            <tr key={index}>
              <td>{intern.fullName}</td>
              <td>{intern.email}</td>
              <td>{intern.phoneNumber}</td>
              <td>{intern.address}</td>
              <td>{intern.dob}</td>
              <td>{intern.education}</td>
              <td>{intern.startDate}</td>
              <td>{intern.endDate}</td>
              <td>{intern.skills}</td>
              <td>{intern.comments}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(index)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Intern;
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CourseDelete(props) {
  return (
    <Form onSubmit={props.handleDelete}>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => props.setSelectedValue(e.target.value)}
        value={props.selectedValue}
      >
        {props.coursesObj.map((corso) => (
          <option key={corso.titolo} value={corso.titolo}>
            {corso.titolo}
          </option>
        ))}
      </Form.Select>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CourseDelete;

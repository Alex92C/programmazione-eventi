import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CourseDelete(props) {
  return (
    <Form onSubmit={props.handleDelete}>
      {/* <Form.Select
        aria-label="Default select example"
        onChange={(e) => props.setSelectedValue(e.target.value)}
        value={props.selectedValue}
      >
        {props.coursesObj.map((corso) => (
          <option key={corso.titolo} value={corso.titolo}>
            {corso.titolo}
          </option>
        ))}
      </Form.Select> */}

      <Form.Group className="mb-3">
        <Form.Label>Elimina un evento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci il titolo"
          // ref={props.deleteRef}
          value={props.deleteTitle}
          onChange={props.handleDeleteTitleChange}
        />

        <Form.Text className="text-muted">
          Inserisci il titolo esatto dell'evento da eliminare
        </Form.Text>
      </Form.Group>

      <br />
      <Button variant="primary" type="submit">
        Rimuovi
      </Button>
    </Form>
  );
}

export default CourseDelete;

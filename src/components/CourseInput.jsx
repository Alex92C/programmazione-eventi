import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CourseInput(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group className="mb-3" controlId="titolo">
        <Form.Label>Titolo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci il titolo"
          value={props.titolo}
          onChange={props.handleSetTitolo}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="relatori">
        <Form.Label>Relatori</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci i relatori"
          value={props.relatori}
          onChange={props.handleSetRelatori}
        />
        <Form.Text className="text-muted">
          Separa i relatori da una virgola
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="data">
        <Form.Label>Data</Form.Label>
        <Form.Control
          type="date"
          placeholder="Inserisci la data"
          value={props.data}
          onChange={props.handleSetData}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          type="text"
          placeholder="Indica la categoria"
          value={props.category}
          onChange={props.handleSetCategory}
        />
        <Form.Text className="text-muted">Indica la categoria esatta</Form.Text>
      </Form.Group>
      <br />
      <Form.Group controlId="tipoEvento">
        <Form.Check
          value="webinar"
          type="radio"
          aria-label="webinar"
          label="webinar"
          onChange={props.handleChange}
          checked={props.tipoEvento === "webinar"}
        />
        <Form.Check
          value="aula"
          type="radio"
          aria-label="aula"
          label="aula"
          onChange={props.handleChange}
          checked={props.tipoEvento === "aula"}
        />
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="soldOut">
        <Form.Check
          type="checkbox"
          label="Sold out"
          value={props.soldout}
          onChange={props.handleSetSoldout}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// OBJECT EXAMPLE
// {
//   titolo: "TITOLO SEMINARIO 14",
//   relatori: "Rovelli, Carbone, Della Marta",
//   data: "21 Ottobre",
//   photoName: "images/webinar.jpg",
//   category: "piattaforme",
//   tipoEvento: "webinar",
//   soldout: false,
// },

export default CourseInput;

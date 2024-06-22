import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

const NewProductModal = ({ isOpen, onClose, handleSave }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [disponibility, setDisponibility] = useState(true);

  const subimit = (e) => {
    e.preventDefault();
    handleSave(name, price, description, disponibility);
    reset();
  };

  const reset = () => {
    setName("");
    setPrice("");
    setDescription("");
    setDisponibility(true);
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Form onSubmit={subimit}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-3">
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome do produto"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              placeholder="Digite o preço do produto"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Digite a descrição do produto"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Disponível"
              checked={disponibility}
              onChange={(e) => setDisponibility(e.target.checked)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn btn-primary" type="submit">
            Salvar
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewProductModal;

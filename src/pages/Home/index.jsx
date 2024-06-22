import React, { useEffect, useState } from "react";
import { Dropdown, Pagination } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FaPlus } from "react-icons/fa";
import { getProduct, postProduct } from "../../api/product";
import NewProductModal from "../../components/NewProductModal";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState("name");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getProduct(page, size, sort).then((response) => {
      setProducts(response.data.content);
      setTotalPages(response.data.totalPages);
    });
  }, [page, size, sort]);

  const handleSave = (name, price, description, disponibility) =>
    postProduct({
      productName: name,
      productPrice: price,
      productDescription: description,
      productDisponibility: disponibility,
    }).then(() => {
      getProduct(page, size, sort).then((response) => {
        setProducts(response.data.content);
        setTotalPages(response.data.totalPages);
        setIsOpen(false);
      });
    });

  return (
    <main className="w-100 bg-white text-center py-3 px-5 d-flex justify-content-center align-items-center">
      <NewProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSave={handleSave}
      />
      <section className="d-flex justify-content-center align-items-end w-100 flex-column">
        <div className="d-flex justify-content-between w-100">
          <Dropdown onSelect={(e) => setSort(e)} className="mb-3">
            <Dropdown.Toggle variant="secondary">Ordenar por</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="name">Nome</Dropdown.Item>
              <Dropdown.Item eventKey="priceasc">
                Preço (crescente)
              </Dropdown.Item>
              <Dropdown.Item eventKey="pricedesc">
                Preço (decrescente)
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button
            className="btn btn-success mb-3"
            onClick={() => setIsOpen(true)}
          >
            <FaPlus size={20} className="me-2" fill="white" />
            Adicionar Produto
          </button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="w-25">Nome</th>
              <th>Preço</th>
              <th className="w-50">Descrição</th>
              <th>Disponibilidade</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productDescription}</td>
                <td>
                  {product.productDisponibility ? "Disponível" : "Indisponível"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center w-100">
          <Pagination>
            <Pagination.Prev
              onClick={() => {
                if (page > 0) setPage(page - 1);
              }}
            />
            <Pagination.Item active>{page + 1}</Pagination.Item>
            <Pagination.Next
              onClick={() => {
                if (page < totalPages - 1) setPage(page + 1);
              }}
            />
          </Pagination>
        </div>
      </section>
    </main>
  );
};

export default Home;

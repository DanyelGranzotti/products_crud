import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = ({}) => {
  return (
    <footer className="w-100 bg-withe text-center px-5 py-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column gap-4 align-items-start">
          <h2>Product CRUD.</h2>
          <p className="text-secondary">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="d-flex flex-column gap-4">
          <p className="text-secondary">Links</p>
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="d-flex flex-column gap-4">
          <p className="text-secondary">Help</p>
          <Link to="/home">Payment Options</Link>
          <Link to="/shop">Returns</Link>
          <Link to="/about">Privacy Policies</Link>
        </div>
        <div className="d-flex flex-column gap-4 align-items-start">
          <p className="text-secondary">Newsletter</p>
          <Form className="d-flex gap-2">
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Group>
            <button className="btn">Subscribe</button>
          </Form>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-start">
        <p className="text-left">© 2024 Product CRUD. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;

import {
  TbHeart,
  TbSearch,
  TbShoppingCart,
  TbUserExclamation,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-100 bg-white text-center py-3 px-5 d-flex justify-content-between">
      <div className="d-flex justify-content-between gap-2 align-items-center">
        <h1 className="fs-2 font-weight-bold">Products CRUD</h1>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-5">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-5">
        <Link to="/account">
          <TbUserExclamation size={24} />
        </Link>
        <Link to="/search">
          <TbSearch size={24} />
        </Link>
        <Link to="/wishlist">
          <TbHeart size={24} />
        </Link>
        <Link to="/cart">
          <TbShoppingCart size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;

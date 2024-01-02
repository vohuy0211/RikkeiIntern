import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item className="text-danger fs-5 fw-bold">Shopping Malls</Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;

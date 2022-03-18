import { Link } from 'react-router-dom';
import '../index.css'

function Navbar() {
  return (
    <nav>
      <img src='https://awsimages.detik.net.id/community/media/visual/2022/03/15/kenapa-logo-halal-diganti-ada-perpindahan-wewenang-dari-mui-ke-kemenag.jpeg?w=700&q=90'></img>
      <Link className="link" to='/'>Home</Link>
      <Link className="link" to='/todos'>Todo</Link>
      <Link className="link" to="/biodata">Form Biodata</Link>
    </nav>
  );
}

export default Navbar   
import { Link } from 'react-router-dom';
import './header.css';


//Component는 첫글자는 대문자로 생성
function Header(){  
  return(
    <>
      <div>
        <nav className='nav-container'>
          <Link to={"/"}>
            <h1 className='nav-title'>리액트 리덕스 쇼핑 장바구니</h1>
          </Link>

          <ul className='nav-ul'>
            <Link to={"/"}><li className='nav-li'>HOME</li></Link>
            <Link to={"/cart"}><li className='nav-li'>CART</li></Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header;
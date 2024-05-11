
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header"
import Home from "./pages/home";
import Cart from "./pages/cart";
import NotFound from "./pages/notfound"
import "./App.css";

//npm install react-router-dom @reduxjs/toolkit react-redux react-icons react-loader-spinner
//react-router-dom : 네비게이션과 라우팅
//@reduxjs/toolkit : Redux의 보일러플레이트 코드를 최소화하고 간편하게 Redux 스토어를 설정할수 있는 도구
//react-redux      : React애플리케이션과 Redux를 연결하여 React컴포넌트에서 사용할수 있도록 해줌
//react-icons      : 다양한 아이콘 세트를 React애플리케이션에 쉽게 통합할 수 있도록 해줌
//react-loader-spinner
function App() {
  return (
    <div>     
      <Header/>
      <Routes>
        <Route path="/"       element={<Home/>}></Route>
        <Route path="/cart"   element={<Cart/>}></Route>
        <Route path="*"       element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

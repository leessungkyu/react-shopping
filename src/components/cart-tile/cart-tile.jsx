import "./cart-tile.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({cartItem}){
  //리덕스(store)의 함수를 사용하기 위해선 useDispatch()
  //리덕스(store)의 데이터를 사용하기 위해서는 useSelector()

  const dispatch = useDispatch();
  //리덕스의 함수 사용을 위해 useDispatch()함수 사용

  function hRemoveFromCart(){
    dispatch(removeFromCart(cartItem.id));
  }

  return(
    <div className="tile-container">
      <div className="flex-padding">
        <img src={cartItem?.image} alt={cartItem?.title} className="rounded-box"/>
        <h1 className="product_title">{cartItem.title}</h1>
        <p className="product_price">{Math.floor(cartItem.price * 1300).toLocaleString('ko-KR')}원</p>     
      </div>
      
      <div><button onClick={hRemoveFromCart} className="bold-red-btn">제거</button></div>
    </div>
  )
}
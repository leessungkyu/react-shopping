import { useSelector } from "react-redux";
import "./cart.css";
import { useEffect, useState } from "react";
import CartTile from "../components/cart-tile/cart-tile";
import { Link } from "react-router-dom";


function Cart(){
  const cartState = useSelector(state => state.cart);
  let [totlaPrice, setTotalPrice] = useState(0);

  //총 가격 구하기
  useEffect(()=>{
    setTotalPrice(cartState.reduce((acc, cur)=>{
      return acc + cur.price;
    },0));
  }, [cartState])  //useEffect의 update에 대해서 cartState가 바뀔때마다 코드 실행

  return(
    <>
      <div>
        {
          cartState && cartState.length ? (
            <div>
              <div className="my-element">
                <div>
                  <h1>장바구니 내역</h1>
                  <p>담긴갯수 : <span>{cartState.length}</span></p>
                  <p>총 가격  : <span>{Math.floor(totlaPrice * 1300).toLocaleString('ko-KR')}원</span></p>
                  ===========================
                </div>
                <div className="center-flex-column">
                  {
                    cartState.map((item,idx)=>{
                      return (
                          <CartTile ket={idx} cartItem={item}/>
                      )
                    })
                  }
                </div>
              </div> 
            </div> 
          ) : (
            <div>
              <h1>현재 담긴 상품이 없습니다.</h1>
              <Link to={'/'}>
                <button>담으러가기</button>
              </Link>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Cart;
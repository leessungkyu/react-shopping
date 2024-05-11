import { useEffect, useState } from "react";
import {} from "react-icons";
import {Circles} from "react-loader-spinner";
import "./home.css";
import ProductTile from "../components/product-tile/product-tile";


function Home(){
  //fetch로 받아올 state
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(false);

  // https://fakestoreapi.com/products  : 가상의 쇼핑데이터를 주는 사이트
  // 서버에서 데이터를 받기 위해서  useEffect와 fetch를 사용
  // 리액트에서 화면과는 별개로 오래걸리는 작업은 useEffect를 사용
  useEffect (()=>{
    fetchListProducts();
  } ,[])  //[] update에 대해서는 발동안함

  async function fetchListProducts() {
    try {     
      setLoading(true);
      const res  = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      
      console.log(data);
      if(data){
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return(
    <>

      <div>
        {
        loading ? (
            <div className="my-loading">
                <Circles height={'120'} color={' rgb(127,29,29)'} visible={true}/>
            </div>
        )
        : (  
            <div className="my-product-grid">
              {
                products.map((product, idx)=>{
                  return(
                    <ProductTile product={product} key={idx} />

                  )
                })
              }
            </div>
        )
        }
      </div>
    </>
  )
}

export default Home;
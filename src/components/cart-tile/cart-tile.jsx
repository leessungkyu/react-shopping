import "./cart-tile.css";

export default function CartTile({cartItem}){
  return(
    <>
      <div>{cartItem.title}</div>
      <div>{cartItem.price}달러</div>
      <div>===========================</div>
    </>
  )
}
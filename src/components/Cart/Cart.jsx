import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./cart.css" 
const Cart = () => {

    const {myCart, total} = useContext(CartContext);
    return ( 
        <>
            <section className="cart__container">
                <div className="cart__header">
                    CHECK OUT:
                </div>
                <div className="cart__items">
                    {myCart.map((item) => {
                        
                        return (
                            <div className="cart__item" >
                                <img className="cart__img" src={item.image} alt=""></img>
                                <div className="cart__text">{item.name} : {item.price}$</div>
                                
                            </div>
                        )
                       
                    })}
                </div>
                <div className="cart__payment">Total: {total}$</div>
            </section>
        </>
     );
}
 
export default Cart;
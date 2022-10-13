import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./cart.css"
const Cart = () => {
    const navigate = useNavigate();
    const { myCart, total, addToCart, setTotal } = useContext(CartContext);
    const handleCheckout = () => {
        setTotal(0);
        addToCart([]);
    }
    const handleHome = () => {
        navigate("/")
    }
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
                    <div className="cart__payment">Total: {total}$</div>

                </div>
                <div className="cart__button_checkout">
                    <button className="cart__checkout" onClick={handleCheckout}>DONE</button>
                </div>
                <div className="cart__button_gohome">
                    <button className="cart__gohome" onClick={handleHome}>Go back home</button>

                </div>

            </section>
        </>
    );
}

export default Cart;
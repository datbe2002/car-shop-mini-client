import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "./card.scss";

const CarsCard = ({ name, year, description, image, price }) => {
    const [isBooked, setBooked] = useState(false);

    //lay addToCart tu Context khai bao value o App.js
    const { addToCart, setTotal } = useContext(CartContext)
    const handleclick = () => {
        setBooked(true);
        const newItems = {
            name: name,
            price: price,
            image: image,
        };
        addToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)))
    };



    return (
        <>
            <section className="cars">
                <div className="cars__content">
                    <div className="cars__image-container">
                        <img className="cars__image" src={image} alt="400x400" />
                        <div className="cars__overlay cars__overlay--blur">
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="cars__info">
                        <h2 className="cars__name">{name}</h2>
                        <h2 className="cars__year">{year} edition</h2>
                    </div>
                    <div className="cars__price">{price}$</div>

                    {isBooked ? (
                        <button disabled className="cars__btn-disabled">BOOKED</button>
                    ) : (
                        <button className="cars__btn" onClick={handleclick}>BOOK</button>
                    )}

                </div>
            </section>
        </>
    )
}

export default CarsCard;
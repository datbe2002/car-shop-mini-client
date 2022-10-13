import CarsCard from "./CarsCard";
import "./card.scss";
const CarsPage = ({ allCars }) => {
    return (
        <>
            <section className="cars-container">
                {allCars.map((car) => {

                    return (
                        <CarsCard name={car.name} year={car.year} description={car.description} image={car.imageUrl} price={car.price}></CarsCard>
                    )
                }
                )}
            </section>
        </>
    );
}

export default CarsPage;
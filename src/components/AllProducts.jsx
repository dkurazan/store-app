import { useEffect, useState } from "react";
import Product from "./Product";

export default function AllProducts() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:3000/meals");
            const resData = await response.json();

            setMeals(resData);
        };

        fetchProducts();
    }, []); 

    return (
        <ul id="meals">
            {meals.map((item) => (
                <Product key={item.id} product={item} />
            ))}
        </ul>
    );
}

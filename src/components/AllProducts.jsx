import useHttp from "../hooks/useHttp";
import Product from "./Product";
import Error from "./UI/Error";

const requestConfig = {};

export default function AllProducts() {
    const {
        data: meals,
        error,
        isLoading,
    } = useHttp("http://localhost:3000/meals", requestConfig, []);

    let fallbackText = {
        title: 'Something went wrong.',
        message: 'An error occured.'
    };

    if (error) {
        fallbackText.title = "Something went wrong.";
        fallbackText.message = error.message || "An error occured.";
    }

    if (!meals) {
        fallbackText.title = "No meals found.";
        fallbackText.title = "There is no meals.";
    }

    if (isLoading) {
        return <p className="center">Loading...</p>
    }

    if (error || !meals) {
        return <Error {...fallbackText} />;
    }

    return (
        <ul id="meals">
            {meals.map((item) => (
                <Product key={item.id} product={item} />
            ))}
        </ul>
    );
}

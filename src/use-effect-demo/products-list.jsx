import { useEffect } from "react"

export default function ProductsList(props) {

    useEffect(() => {

        const loadProducts = async () => {
            try {

                const res = await fetch('https://dummyjson.com/products?limit=5');
                const { products } = await res.json();
                console.log('products: ', products)

            } catch (err) {
                console.log('Error: ', err);
            }
        }

        loadProducts();

    }, [])

    return (
        <div>
            Products
        </div>
    )
}
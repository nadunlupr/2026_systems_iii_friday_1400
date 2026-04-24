import { useEffect, useState } from "react"

export default function ProductsList(props) {

    const initState = {
        products: [],
        clicksCount: 2,
    }
    const [state, setState] = useState(initState)
    

    useEffect(() => {

        const loadProducts = async () => {
            try {

                const res = await fetch('https://dummyjson.com/products?limit=5');
                const { products } = await res.json();
                console.log('products: ', products);
                setState({
                    ...state, 
                    products
                })

            } catch (err) {
                console.log('Error: ', err);
            }
        }

        loadProducts();

    }, [])

    return (
        <div>
            <h1>Product list</h1>
            {
                state.products.map(({id, title}) => {
                    return (
                        <div>{id} title: {title}</div>
                    )
                })
            }
        </div>
    )
}
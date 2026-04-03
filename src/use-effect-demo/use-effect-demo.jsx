import { useEffect } from "react";
import ProductsList from "./products-list";

export default function UseEffectDemo(props) {

    useEffect(() => {
        console.log('inside useEffect');

        const callPizzaPromise = async () => {
            try {
                const res = await pizzaPromise;
                console.log('promise resolved: ', res);
                // handling the successful resolve
                // 50 lines of code

            } catch (err) {
                // handle the error code
                console.log('Error: ', err);
            }
        }

        // pizzaPromise
        //     .then((res) => {
        //         console.log('promise resolved: ', res);
        //         // handling the successful resolve
        //         // 50 lines of code
        //     })
        //     .catch((error) => {
        //         // handle the error code
        //         console.log('Error: ', error);
        //     });

        callPizzaPromise();
        console.log('promise called')

    }, []);

    console.log('renderinggg...');
    return (
        <div>
            <h1>Let's try Promises</h1>
            <ProductsList />
        </div>
    )
}

const isDoughAvailable = true;

const pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isDoughAvailable) {
            resolve("Here's your pizza! Enjoyyy!!");
        } else {
            reject("Sorry we dont' have dough so no pizza ! :D");
        }
    }, 5000);
});
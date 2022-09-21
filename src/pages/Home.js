import Product from "../components/Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-products">
                    <Product
                    id={1}
                    name='5lbs. Bag of Apples'
                    price={5}
                     />
                    <Product
                    id={1}
                    name='5lbs. Bag of Oranges'
                    price={4}
                     />
                    <Product
                    id={1}
                    name='5lbs. Case of Strawberries'
                    price={7}
                     />
                    <Product
                    id={1}
                    name='5lbs. Watermelon'
                    price={4}
                     />
                    <Product
                    id={1}
                    name='2lbs. Case of Cherries'
                    price={3}
                     />
                    <Product
                    id={1}
                    name='Batch of 5 Bananas'
                    price={4}
                     />
                </div>
            </div>
        </div>
    )
}

export default Home;
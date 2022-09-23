import Product from "../components/Product";
import apples from './photos/apples.jpg';
import bananas from './photos/bananas.jpg';
import cherries from './photos/cherries.jpg';
import oranges from './photos/oranges.jpg';
import strawberries from './photos/strawberries.jpg';
import watermelon from './photos/watermelon.jpg';

function Home() {
    
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-products">
                    <Product
                    id={1}
                    image={apples}
                    name='5lbs. Bag of Apples'
                    price={5}
                     />
                    <Product
                    id={2}
                    image={oranges}
                    name='5lbs. Bag of Oranges'
                    price={4}
                     />
                    <Product
                    id={3}
                    image={strawberries}
                    name='5lbs. Case of Strawberries'
                    price={7}
                     />
                    <Product
                    id={4}
                    image={watermelon}
                    name='5lbs. Watermelon'
                    price={4}
                     />
                    <Product
                    id={5}
                    image={cherries}
                    name='2lbs. Case of Cherries'
                    price={3}
                     />
                    <Product
                    id={6}
                    image={bananas}
                    name='Batch of 5 Bananas'
                    price={4}
                     />
                </div>
            </div>
        </div>
    )
}

export default Home;
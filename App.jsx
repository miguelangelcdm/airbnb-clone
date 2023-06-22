import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={cards[0].img}
        rating={cards[0].rating}
        reviewCount={cards[0].reviewCount}
        country={cards[0].country}
        title={cards[0].title}
        price={cards[0].price}
      />
    </div>
  );
}
export default App;

const cards = [
  {
    img: "2508B072-43BD-4CBA-81B4-A1C1296DF6DE.jpeg",
    rating: "5.0",
    reviewCount: 6,
    country: "Peru",
    title: "Life Lessons with Michael Gray",
    price: 2000,
  },
];

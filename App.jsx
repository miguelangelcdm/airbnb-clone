/* eslint-disable react/jsx-key */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardmockdata from "./cardmockdata";

export default function App() {
  const cardelements = cardmockdata.map((data) => {
    return (
      <Card
        id={data.id}
        // img={data.img}
        // rating={data.rating}
        // reviewCount={data.reviewCount}
        // country={data.country}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
        // online={data.online}
        {...data}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-list">{cardelements}</div>
    </div>
  );
}
// export default App;

// const cards = [
//   {
//     img: "2508B072-43BD-4CBA-81B4-A1C1296DF6DE.jpeg",
//     rating: "5.0",
//     reviewCount: 6,
//     country: "Peru",
//     title: "Life Lessons with Michael Gray",
//     price: 2000,
//   },
// ];
// console.log(cards[0].img)

// const names=["miguel","leslie","angelica","nicol","christian"]
// const capitalized=names.map((name)=>{
//   return name[0].toUpperCase()+name.slice(1)
// })
// console.log(capitalized)
// const cities=["El Cairo","Birminghan","Jakarta"]
// const paragraphs=cities.map(city=>`<p>${city}</p>`)
// console.log(paragraphs)

import "../assets/styles/for_pages/home.scss";
import Header from "../components/Header";
import Billboard from "../components/Billboard";
import LastViewedProducts from "../components/LastViewedProducts";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Billboard />

      <LastViewedProducts />
    </div>
  );
};

export default Home;

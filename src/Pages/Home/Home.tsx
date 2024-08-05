import Filters from "../../Components/Filters/Filters";
import HomePageProductsList from "../../Components/HomePageProductsList/HomePageProductsList";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Filters />
      <HomePageProductsList />
    </>
  );
};

export default Home;

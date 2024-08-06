import Filters from "../../Components/Filters/Filters";
import HomePageProductsList from "../../Components/HomePageProductsList/HomePageProductsList";
import "./Home.css";
const Home = () => {
  document.title = "AG Fashion";
  return (
    <>
      <Filters />
      <HomePageProductsList />
    </>
  );
};

export default Home;

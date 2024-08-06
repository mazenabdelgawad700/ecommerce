import { useEffect } from "react";
import Filters from "../../Components/Filters/Filters";
import HomePageProductsList from "../../Components/HomePageProductsList/HomePageProductsList";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    document.title = "AG Fashion";
  }, []);
  return (
    <>
      <Filters />
      <HomePageProductsList />
    </>
  );
};

export default Home;

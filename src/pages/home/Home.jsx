import Blogs from "../../components/bloogs/Bloogs";
import Homefoter from "../../components/homefoter/Homefoter";
import NewCollection from "../../components/newcollection/NewCollection";
import Pluscard from "../../components/plusiconemodel/Pluscard";
import Runerpics from "../../components/runerpics/runerpics";
import Sixgroup from "../../components/sixgroup/Sixgroup";
import TopTrending from "../../components/topTrending/topTrending";
import TrailColection from "../../components/trailCloection/TrailColection";
import Whatsnew from "../../components/whtasnew/Whatsnew";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="main_container_home flex h-screen items-center justify-center bg-cover bg-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Welcome to Our Website
        </h1>
      </div>
      <NewCollection />
      <Pluscard />
      <Whatsnew />
      <TrailColection />
      <TopTrending />
      <Whatsnew />
      <Blogs />
      <Runerpics />
      <Sixgroup />
      <Homefoter />
    </>
  );
}

export default Home;

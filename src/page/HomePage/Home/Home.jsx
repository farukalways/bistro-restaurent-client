import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      {/* import component */}
      <Banner />
      <Category />
      <PopulerMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;

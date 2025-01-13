import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className="featured_item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subheading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center  pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            deleniti eum accusantium accusamus aliquam necessitatibus, sint et
            iste natus maxime. Ab, incidunt eveniet fuga hic deserunt
            repudiandae, est ut eum aliquam doloribus corporis, eius maiores
            tempore quae illo. Eaque, pariatur.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

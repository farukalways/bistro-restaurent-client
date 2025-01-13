import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Sheard/MenuItem/MenuItem";
const PopulerMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const populerItem = data.filter((item) => item.category === "popular");
        setMenu(populerItem);
      });
  }, []);
  return (
    <div className="mb-12">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"populer Item"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopulerMenu;

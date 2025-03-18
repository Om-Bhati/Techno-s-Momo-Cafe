import React from "react";
import Img from "../../assets/momo4.jpg";
import Img2 from "../../assets/momo2.jpg";
import Img3 from "../../assets/momo3.jpg";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Steamed Momo",
    description:
      " Soft, juicy, and packed with flavorful fillings, a classic delight for momo lovers",
  },
  {
    id: 2,
    img: Img2,
    name: "Fried Momo",
    description:
      "Crispy on the outside, tender inside, delivering a perfect balance of crunch and taste",
  },
  {
    id: 3,
    img: Img3,
    name: "Crunchy Momo",
    description:
      "Extra crispy and golden-brown, offering a satisfying crunch with every bite",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r   from-primary to-secondary ">
              Our Services
            </h1>
            {/* <h1 className="text-3xl font-bold ">Our Services</h1> */}
            <p className="text-xs text-gray-400">
              Mouthwatering momos, snacks, and beverages.
              Cozy & Tech-Friendly Space.
              Free Wi-Fi, perfect for work, study, or relaxation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

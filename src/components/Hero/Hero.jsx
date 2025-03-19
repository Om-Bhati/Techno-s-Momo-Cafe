import React from "react";
import cafe_pic from "../../assets/cafe_pic.jpg";
import Vector from "../../assets/vector3.png";
import momo1 from "../../assets/momo4.jpg";
import momo2 from "../../assets/momo2.jpg";
import momo3 from "../../assets/momo3.jpg";

const ImageList = [
  {
    id: 1,
    img: momo1,
  },
  {
    id: 2,
    img: momo2,
  },
  {
    id: 3,
    img: momo3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(cafe_pic);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  Techno Momo Cafe
                </span>{" "}
              </h1>
              <p className="text-sm ">
                Experience the perfect blend of taste and technology at Techno
                Momo Cafe. From sizzling momos to refreshing drinks, we offer a
                cozy space for food lovers, tech enthusiasts, and friends to
                connect. Enjoy great flavors in a modern, vibrant setting!
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  src={imageId}
                  alt="biryani img"
                  className="w-[600px] rounded-lg object-cover shadow-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

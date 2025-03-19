import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Amit Patel",
    text: "The momos here are simply amazing! The steamed ones are so juicy, and the crunchy ones have the perfect crisp. The Paneer Momo Combo is my go-to order. Highly recommended!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Jash Patel",
    text: "Loved the taste and quality of the food! The burger was fresh, the fries were crispy, and the delivery was super fast. Techno Momo Cafe never disappoints!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ansh Gupta",
    text: "A great place to hang out with friends. The food is delicious, and the cozy ambiance makes it even better. Their home delivery is quick and hassle-free!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Harshit",
    text: "Techno Momo Cafe serves the best momos in town! Whether it’s steamed, fried, or crunchy, every bite is flavorful. Plus, their service is top-notch!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
            Our customers love the delicious flavors and warm ambiance at Techno Momo Cafe! From juicy momos to crispy fries, they keep coming back for the perfect food experience.✨✨
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

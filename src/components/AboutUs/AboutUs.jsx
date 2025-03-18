import React from "react";

const aboutUsSlides = [
  {
    title: "The Story of Techno Momo Cafe",
    description:
      "Techno Momo Cafe is more than just a place to eat—it's a fusion of flavors and experiences. We take pride in crafting delicious momos with authentic recipes, blending tradition with a modern twist. From soft steamed momos to crispy delights, each bite is a journey of taste. Join us as we bring the best of street food culture to a cozy and welcoming atmosphere.",
  },
  {
    title: "Quality & Freshness in Every Bite",
    description:
      "At Techno Momo Cafe, we believe that great food starts with high-quality ingredients. Our momos, burgers, and fries are freshly prepared daily, ensuring that every meal is packed with rich flavors and goodness. We source the finest ingredients and maintain strict hygiene standards to deliver a wholesome dining experience.",
  },
  {
    title: "Bringing People Together",
    description:
      "Techno Momo Cafe is not just about food; it’s about connection. Whether you're grabbing a quick bite with friends or enjoying a relaxing meal with family, we provide a vibrant space where everyone can come together. Our home delivery service ensures that you can enjoy our delicious combos from the comfort of your home.",
  },
];

const AboutUs = () => {
  return (
    <div id="about" className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          About Techno Momo Cafe
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Experience the perfect blend of taste, quality, and community at
          Techno Momo Cafe. Our journey is about bringing people together
          through flavorful bites and unforgettable memories.
        </p>
      </div>

      {/* About Us Content Sections */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {aboutUsSlides.map((slide, index) => (
          <div
            key={index}
            className="shadow-lg rounded-xl overflow-hidden bg-white dark:bg-gray-800 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
              {slide.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {slide.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

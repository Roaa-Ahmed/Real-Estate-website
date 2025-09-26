import { motion } from "framer-motion";

const PropertyGallery = () => {
  const images = [
    { src: "/Product-image-3.jpg", alt: "Thumbnail 1" },
    { src: "/Product-image-4.jpg", alt: "Thumbnail 2" },
    { src: "/Product-image-5.jpg", alt: "Thumbnail 3" },
    { src: "/Product-image-6.jpg", alt: "Thumbnail 4" },
    { src: "/Product-image-7.jpg", alt: "Thumbnail 5" },
  ];

  return (
    <div className=" max-w-7xl mx-auto">
      {/* Main img Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main Gallery Container */}
        <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
          {/* Main Large img */}
          <div className="w-full  md:w-3/3 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/Product-image-main.png"
              alt="Main property img"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <button className="rounded-md cursor-pointer h-[48px] px-[24px] bg-[#4F46E5] text-white hover:bg-[#5e46e5] transition-all duration-300">
                Start Tour VR
              </button>
            </div>
            <div className="absolute inset-0 bg-gray-50/30"></div>
          </div>

          {/* Right Side Small imgs - Only visible on md and larger screens */}
          <div className="hidden md:flex md:w-1/5 flex-col gap-4">
            <div className="relative h-[240px] rounded-xl overflow-hidden">
              <img
                src="/public/Product-image-1.jpg"
                alt="Property interior 1"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="relative h-[240px] rounded-xl overflow-hidden">
              <img
                src="/Product-image-2.jpg"
                alt="Property interior 2"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory sm:grid sm:overflow-visible sm:grid-cols-3 md:grid-cols-5 sm:gap-4 py-4 border-t-2 border-b-2 border-gray-100 mt-6 mb-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="relative flex-none w-[160px] h-[240px] sm:w-full sm:h-[240px] rounded-xl overflow-hidden shadow-md snap-center scrollbar-hide"
            >
              <img
                src={img.src}
                alt={img.alt}
                height={"100%"}
                width={"100%"}
                className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyGallery;

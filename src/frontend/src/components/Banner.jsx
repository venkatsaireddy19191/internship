import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    "https://www.thedhronas.com/admin/assets/images/banner_images/Banner_1.jpeg",
    "https://www.thedhronas.com/admin/assets/images/banner_images/banner_laptop.png",
    "https://www.thedhronas.com/admin/assets/images/banner_images/TARGET_SSC_2025.png",
];

const Banner = () => {
    return (
        <div style={{ width: "100%", height: "70vh", margin: "0", overflow: "hidden", position: "relative"}}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="custom-swiper"
                style={{ width: "100%", height: "100%" }}
            >
                {images.map((src, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        {/* Blurred Background for Effect */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(20px) brightness(60%)",
                                zIndex: -1,
                            }}
                        />
                        {/* Main Image */}
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                zIndex: 1
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;

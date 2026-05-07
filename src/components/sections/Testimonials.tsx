import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../../styles/Testimonials.css';

// Importation des styles de base de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Typage des données d'un témoignage
interface Testimonial {
    id: number;
    text: string;
    author: string;
    location: string;
    imageSrc: string;
    imageSrcSet: string;
}

// Données extraites de ton HTML
const testimonialsData: Testimonial[] = [
    {
        id: 1,
        text: "I’ve been shopping at this store for a few months now, and I can confidently say it’s one of the best online shopping experiences I've had. From the seamless ordering process to the fast delivery, everything has been top-notch.",
        author: "Sophia M.",
        location: "San Francisco, CA",
        imageSrc: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_4.webp?v=1746436221&width=400",
        imageSrcSet: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_4.webp?v=1746436221&width=54 54w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_4.webp?v=1746436221&width=74 74w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_4.webp?v=1746436221&width=104 104w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_4.webp?v=1746436221&width=162 162w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_4.webp?v=1746436221&width=208 208w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_4.webp?v=1746436221&width=324 324w"
    },
    {
        id: 2,
        text: "I recently ordered a few items from the 'Stay Warm & Stylish' collection, and I couldn’t be happier. The jacket I bought is both warm and trendy, and I’ve received so many compliments! The material is high quality, and it fits just right.",
        author: "John P.",
        location: "Austin, TX",
        imageSrc: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_6.webp?v=1746436221&width=400",
        imageSrcSet: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_6.webp?v=1746436221&width=54 54w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_6.webp?v=1746436221&width=74 74w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_6.webp?v=1746436221&width=104 104w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_6.webp?v=1746436221&width=162 162w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_6.webp?v=1746436221&width=208 208w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_6.webp?v=1746436221&width=324 324w"
    },
    {
        id: 3,
        text: "As someone who is conscious about the environment, I was thrilled to find a clothing brand that offers an eco-friendly collection without sacrificing style. The clothes are beautiful, comfortable.",
        author: "Emily R.",
        location: "Miami, FL",
        imageSrc: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_1.webp?v=1746436221&width=400",
        imageSrcSet: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_1.webp?v=1746436221&width=54 54w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_1.webp?v=1746436221&width=74 74w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_1.webp?v=1746436221&width=104 104w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_1.webp?v=1746436221&width=162 162w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_1.webp?v=1746436221&width=208 208w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_1.webp?v=1746436221&width=324 324w"
    },
    {
        id: 4,
        text: "The whole shopping experience was fantastic. The website is user-friendly, and I found exactly what I was looking for without any hassle. My order arrived in perfect condition, and the clothing fits beautifully.",
        author: "Olivia T.",
        location: "Chicago, IL",
        imageSrc: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_5.webp?v=1746436222&width=400",
        imageSrcSet: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_5.webp?v=1746436222&width=54 54w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_5.webp?v=1746436222&width=74 74w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_5.webp?v=1746436222&width=104 104w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_5.webp?v=1746436222&width=162 162w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_5.webp?v=1746436222&width=208 208w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_5.webp?v=1746436222&width=324 324w"
    },
    {
        id: 5,
        text: "I’ve been a loyal customer for over a year, and I keep coming back because of the excellent quality and stylish designs. Whether I’m looking for casual wear or something a bit dressier, I can always find something that fits my style perfectly.",
        author: "Liam W.",
        location: "Los Angeles, CA",
        imageSrc: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_7.webp?v=1746436221&width=400",
        imageSrcSet: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_7.webp?v=1746436221&width=54 54w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_7.webp?v=1746436221&width=74 74w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_7.webp?v=1746436221&width=104 104w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_7.webp?v=1746436221&width=162 162w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_7.webp?v=1746436221&width=208 208w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_7.webp?v=1746436221&width=324 324w"
    },
    {
        id: 6,
        text: "I recently ordered from the 'Trendy & Comfortable' collection, and I am so impressed with the quality and design. The items are versatile enough to wear for various occasions, from work to weekend outings.",
        author: "Mark J.",
        location: "New York, NY",
        imageSrc: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_8.webp?v=1746436221&width=400",
        imageSrcSet: "//maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_8.webp?v=1746436221&width=54 54w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_8.webp?v=1746436221&width=74 74w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_8.webp?v=1746436221&width=104 104w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_8.webp?v=1746436221&width=162 162w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_8.webp?v=1746436221&width=208 208w, //maya-theme-empower.myshopify.com/cdn/shop/files/testimonial_8.webp?v=1746436221&width=324 324w"
    }
];

const Testimonials: React.FC = () => {
    return (
        <div className="bg-white testimonial-wrapper" data-section="template--18773151187141__testimonial_HGhyBK" data-block-size="6">
            <div className="container-fluid px-4 md:mx-10!">
                {/* Section Header */}
                <div className="px pt-5!" style={{  marginBottom: '2rem' }}>
                    <div className="relative flex w-full flex-col-reverse ">
                        <h2 className="uppercase font-bold text-black text-balance text-4xl md:text-6xl lg:text-8xl block">
                            Témoignages
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush mb-1 md:mb-2! xl:mb-4! text-3xl md:text-5xl lg:text-6xl">
                            De nos clients
                        </span>
                    </div>
                    {/* <div className="section-label " style={{  marginBottom: '1rem' }}>
                        <span className='uppercase'>Découvrez</span>
                    </div>
                    <h2 className="text-black text-3xl" style={{ marginBottom: '0' }}>Les témoignages de nos clients</h2> */}
                </div>
                

                {/* Swiper Slider */}
                <div className="d-block testimonials-slider-container">
                    <div className="testimonial-outer">
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1.2}
                            spaceBetween={10}
                            loop={false}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: { slidesPerView: 2.2, spaceBetween: 15 },
                                1025: { slidesPerView: 2.7, spaceBetween: 20 },
                                1440: { slidesPerView: 3.2, spaceBetween: 25 },
                                1600: { slidesPerView: 3.7, spaceBetween: 30 },
                            }}
                            className="testimonials-list custom-cursor"
                        >
                            {testimonialsData.map((item) => (
                                <SwiperSlide key={item.id} className="testimonial-item">
                                    <div className="testimonial-item-inner card-gradient">
                                        <div className="testimonial-content">
                                            <div className="text-sm card-text text-black">
                                                {item.text}
                                            </div>
                                        </div>

                                        <div className="testimonial-author">
                                            <div className="testimonial-media media-wrapper media-regular radius-100">
                                                <div
                                                    className="media"
                                                    style={{ '--image-ratio': '100%' } as React.CSSProperties}
                                                >
                                                    <img
                                                        src={item.imageSrc}
                                                        alt={`Testimonial from ${item.author}`}
                                                        srcSet={item.imageSrcSet}
                                                        width="400"
                                                        height="400"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>

                                            <div className="testimonial-author-info">
                                                <div className="testimonial-author-name text-sm card-heading">
                                                    {item.author}
                                                </div>
                                                <div className="testimonial-author-place text-sm card-text">
                                                    {item.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
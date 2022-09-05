
import "./Gallery.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const Gallery = ({pictures, iconNext, iconPrev}) => {
    const [images, ] = useState(pictures.images);
    const [imageIndex, setImageIndex] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHidden(true);
        }, 2000)
    }, []);
    

    return ( 
        <section className="gallery">
            <div className="image-container" onMouseOver={() => {
                setHidden(false);
            }} onMouseOut={() => {
                setHidden(true);
            }}>
                <motion.img
                    key={imageIndex}
                    src={images[imageIndex]} 
                    alt="Product" 
                    loading="lazy" 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }} />
                
                <div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className={`image-btn-container ${hidden ? "hidden" : ""} container-between`}>
                    <button className="b-white container-center" disabled={imageIndex <= 0} onClick={() => setImageIndex(prev => prev -1)}>
                        <img src={iconPrev} alt="Previous" />
                    </button>

                    <button className="b-white container-center" disabled={imageIndex >= images.length - 1} onClick={() => setImageIndex(prev => prev + 1)}>
                        <img src={iconNext} alt="Next" />
                    </button>
                </div>
            </div>
        </section>
     );
}
 
export default Gallery;


import Image_1 from "../assets/image-product-1.jpg";
import Image_2 from "../assets/image-product-2.jpg";
import Image_3 from "../assets/image-product-3.jpg";
import Image_4 from "../assets/image-product-4.jpg";

import Thumbnail_1 from "../assets/image-product-1-thumbnail.jpg";
import Thumbnail_2 from "../assets/image-product-2-thumbnail.jpg";
import Thumbnail_3 from "../assets/image-product-3-thumbnail.jpg";
import Thumbnail_4 from "../assets/image-product-4-thumbnail.jpg";


const Sneakers = {
    
    company: "Sneaker Company",

    type: "Fall Limited Edition Sneakers",

    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

    pictures: {
        images: [
            Image_1, 
            Image_2, 
            Image_3, 
            Image_4
        ],
    
        thumbnails: [
            Thumbnail_1,
            Thumbnail_2,
            Thumbnail_3,
            Thumbnail_4
        ]
    },

    price: {
        original_price: 250.00,
        slashed_rate: 0.5
    }

};


export default Sneakers;

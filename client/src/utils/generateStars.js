import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

/* eslint-disable eqeqeq */
export const generateStars = (rating) => {
const completedStars = Math.floor(rating);
const halfStars = (rating - completedStars) > 0 ? 1 : 0;
const emptyStars = 5 - completedStars - halfStars
const starsHtml = []

for (let i = 0; i<completedStars; i++){
    starsHtml.push(<span><BsStarFill/></span>)
}

if (halfStars > 0) {
    starsHtml.push(<span><BsStarHalf/></span>)
}

for (let i = 0; i<emptyStars; i++){
    starsHtml.push(<span><BsStar/></span>)
}

return starsHtml;


}
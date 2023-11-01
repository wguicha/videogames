import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

/* eslint-disable eqeqeq */
export const generateStars = (rating, id) => {
const completedStars = Math.floor(rating);
const halfStars = (rating - completedStars) > 0 ? 1 : 0;
const emptyStars = 5 - completedStars - halfStars
const starsHtml = []

for (let i = 0; i<completedStars; i++){
    starsHtml.push(<span id={`${id}-${i+1}`}><BsStarFill/></span>)
}

if (halfStars > 0) {
    starsHtml.push(<span id={`${id}-${completedStars + 1}`}><BsStarHalf/></span>)
}

for (let i = 0; i<emptyStars; i++){
    starsHtml.push(<span id={`${id}-${5-i+1}`}><BsStar/></span>)
}

return starsHtml;


}
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import OrderBar from '../OrderBar/OrderBar';
import styles from './Cards.module.css'
import { useSelector, useDispatch } from "react-redux";
import { jumpPage } from '../../redux/actions';

export default function Cards() {
   let pagesN = [];
   const dispatch = useDispatch()
   const { games, pageAdm } = useSelector((state) => state)
   const partialgames = games.slice(pageAdm.currentPage * pageAdm.itemsPerPage - pageAdm.itemsPerPage, pageAdm.currentPage * pageAdm.itemsPerPage)

   //console.log("Games: ", games)

   if (pageAdm.numberPages) {
      for (let i = 1 ; i <= pageAdm.numberPages ; i++){
         pagesN.push(i);
      };

   }

   const handlePages = (event) => {
      dispatch(jumpPage(event.target.value))
   }

   return (
      <div className={styles.cardsContainer}>
         <div className={styles.header}>
            <Nav searchBarNavHidden="no" />
            <OrderBar />
         </div>
         <div className={styles.divCards}>{
            partialgames.map((game) => {
               return <Card game={game} key={game.id}/>
            })
         }
         </div>
         <div className={styles.pageNum}>
            {pagesN.map((x) => {
               return <li key={x}
               value={x}
               onClick={handlePages}
               className={`${styles.pageNumLi} ${ x === pageAdm.currentPage? styles.pageNumLiSelected : ""}`}>
               {x}
               </li>
            })}
         </div>
      </div>
   );
}
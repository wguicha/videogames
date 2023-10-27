import styles from './OrderBar.module.css'
import { useDispatch, useSelector } from "react-redux";
import { searchGamesByKey, showAll, updateOrderParams } from '../../redux/actions';
import { BsBoxArrowInRight } from 'react-icons/bs';

export default function SearchBar(props) {
   // eslint-disable-next-line no-unused-vars
   const dispatch = useDispatch()
   const searchKey = useSelector((state) => state.searchKey)
   const orderProp = useSelector((state) => state.orderParams.prop)
   const orderMode = useSelector((state) => state.orderParams.mode)

   const onSearch = () => {
      searchKey
      ? dispatch(searchGamesByKey(searchKey))
      : dispatch(showAll())
   }

   const handleFilterProp = (event) => {
      dispatch(updateOrderParams({prop: event.target.value}))
   }

   const handleFilterMode = (event) => {
      dispatch(updateOrderParams({mode: event.target.value}))
   }

   return (
   <div className={styles.divWrap}>
      <div className={styles.selectGroup}>
         <p>Ordena por:</p>
         <select className={styles.optionGroupFilter} value={orderProp} onChange={handleFilterProp}>
            <option className={styles.optionFilter} defaultValue>Selecciona..</option>
            <option className={styles.optionFilter} value="name">Nombre</option>
            <option className={styles.optionFilter} value="rating">Rating</option>
            <option className={styles.optionFilter} value="releaseDate">Fecha</option>
         </select>
      </div>
      <div className={styles.selectGroup}>
         <p>Selecciona el sentido:</p>
         <select className={styles.optionGroupFilter} value={orderMode} onChange={handleFilterMode}>
               <option className={styles.optionFilter} value="asc" defaultValue>Ascendente</option>
               <option className={styles.optionFilter} value="desc">Descendente</option>
         </select>
         <button className={styles.buttonSearch} onClick={() => onSearch()}><BsBoxArrowInRight size={12}/></button>
      </div>
   </div>
   );
}

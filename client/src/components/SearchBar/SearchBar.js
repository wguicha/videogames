import styles from './SearchBar.module.css'
import { useDispatch, useSelector } from "react-redux";
import { searchGamesByKey, fetchGames, updateSearchKey, updateGenreSelected, filterByGenre } from '../../redux/actions';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar(props) {
   const searchKey = useSelector((state) => state.searchKey)
   const genres = useSelector((state) => state.genres)
   const genreSelected = useSelector((state) => state.selectedGenre)
   const dispatch = useDispatch()

   const onSearch = (searchType) => {
      if(searchType === "searchByKeyWord"){
         searchKey
         ? dispatch(searchGamesByKey(searchKey))
         : dispatch(fetchGames())
      }
      if(searchType === "searchByGenre"){
         genreSelected
         ? dispatch(filterByGenre(genreSelected))
         : dispatch(fetchGames())
      }
   }

   const handleChange = (event) => {
      if(event.target.value && event.target.name === "searchKey"){
         dispatch(updateSearchKey(event.target.value))
      }else if (!event.target.value && event.target.name === "searchKey"){
         dispatch(updateSearchKey(event.target.value))
         dispatch(fetchGames())
      }

      if(event.target.value && event.target.name === "selectedGenre"){
         dispatch(updateGenreSelected(event.target.value))
      }else if (!event.target.value && event.target.name === "selectedGenre"){
         dispatch(updateGenreSelected(event.target.value))
         dispatch(fetchGames())
      }
   }

   return (
      <div className={styles.searchBox}>
         <label htmlFor="searchKey" >
            <p>Busca por Nombre:&nbsp;&nbsp;&nbsp;</p>
         </label>
         <input type="text" className={styles.inputSearch} onChange={handleChange} placeholder="Escriba palabra clave..." name="searchKey" value={searchKey}/>
         <button className={styles.btnSearch} onClick={() => onSearch("searchByKeyWord")}><FaSearch size={12}/>&nbsp;&nbsp;&nbsp;</button>
         <label htmlFor="selectedGenre" >
            <p>Busca por Genero:&nbsp;&nbsp;&nbsp;</p>
         </label>
         <div>
            <input
               list="genres"
               placeholder="Selecciona.."
               type="text"
               className={ styles.inputSearch }
               name="selectedGenre"
               value={genreSelected}
               onChange={handleChange}
               id="selectedGenre"
            ></input>
            <datalist name="genres" id="genres">
            {
            genres.map((temp, index) => {
               return <option key={index} value={temp}>{temp}</option>
            })
            }
            </datalist>
            </div>
         <button className={styles.btnSearch} name="searchGenre" onClick={() => onSearch("searchByGenre")}><FaSearch size={12}/></button>
      </div>
   );
}

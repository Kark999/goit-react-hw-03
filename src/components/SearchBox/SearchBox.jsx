import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input className={css.searchInput} type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBox;

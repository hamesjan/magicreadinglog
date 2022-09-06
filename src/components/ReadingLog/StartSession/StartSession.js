import RecentBooks from "../RecentBooks/RecentBooks";

const StartSession = (props) => {
  return (
    <div>
      <h2>What book are you reading today?</h2>
      <p>Search book</p>
      <input
        value={props.bookName}
        onChange={props.searchBookName}
        className="reading-log__search-book-input"
      ></input>
      <p style={{ fontSize: "20px", color: "black" }}>
        or choose from your recent books:
      </p>
      <RecentBooks />
    </div>
  );
};

export default StartSession;

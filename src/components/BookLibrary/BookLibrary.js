import "./BookLibrary.css";

const BookLibrary = () => {
  return (
    <div className="book-library__outer-wrapper">
      <div>
        <h1>All your books reside here</h1>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg"
        alt="Hello"
        style={{
          height: "600px",
          width: "1200px",
        }}
      ></img>
    </div>
  );
};

export default BookLibrary;

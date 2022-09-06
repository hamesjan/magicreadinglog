import "./ReadingLogBottomBar.css";
const ReadingLogBottomBar = (props) => {
  const goPrev = () => {
    if (props.progress === 1) {
      props.setProgress(0);
    }
  };

  const goNext = () => {
    if (props.progress === 0) {
      props.setProgress(1);
    }
  };

  return (
    <header className="reading-log__bottom-bar">
      <div className="reading-log__prev-button" onClick={goPrev}>
        <div className="reading-log__button-content">Prev</div>
      </div>
      <div className="reading-log__next-button" onClick={goNext}>
        <div className="reading-log__button-content">Next</div>
      </div>
    </header>
  );
};

export default ReadingLogBottomBar;

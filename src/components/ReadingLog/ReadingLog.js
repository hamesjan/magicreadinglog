import "./ReadingLog.css";
import { useState } from "react";
import ReadingLogBottomBar from "./ReadingLogBottomBar/ReadingLogBottomBar";
import StartSession from "./StartSession/StartSession";
import SessionTimer from "./SessionTimer/SessionTimer";

const ReadingLog = (props) => {
  // CAVA order style? First choose a book, either from recents, or type in new book, debounce and then hit api at end of text
  const [bookName, setBookName] = useState("");
  //const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const searchBookName = (event) => {
    setBookName(event.target.value);
    // optional: redirect the user
  };

  const visibleComponent = () => {
    if (progress === 0) {
      return (
        <StartSession bookName={bookName} searchBookName={searchBookName} />
      );
    } else if (progress === 1) {
      return <SessionTimer />;
    }
  };

  return (
    <div>
      <div className="reading-log__outer-wrapper">{visibleComponent()}</div>
      <ReadingLogBottomBar setProgress={setProgress} progress={progress} />
    </div>
  );
};

export default ReadingLog;

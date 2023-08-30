import logo from "./logo.svg";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiMicrophone } from "react-icons/bi";
import { BsPauseCircle } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <div>Your Browser Doesn't Support This App</div>;
  }
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };
  const micColor = listening ? "white" : "black";

  return (
    <>
      <div className="header">
        <h1>Voice to Text</h1>
      </div>
      <div className="actions">
        <p>
          {listening ? "Recording..." : "Click the Record Button to Record"}
        </p>
        <div className="buttons">
          <button
            style={{ background: listening ? "red" : "white" }}
            onClick={startListening}
          >
            <BiMicrophone color={micColor} />
          </button>
          <button onClick={SpeechRecognition.stopListening}>
            {listening ? <BsPauseCircle /> : <AiOutlinePlayCircle />}
          </button>
          <button onClick={resetTranscript}>
            <GrPowerReset />
          </button>
        </div>
      </div>
      <div className="data">{transcript}</div>
      <footer>
        <p>Made with React</p>
      </footer>
    </>
  );
}

export default App;

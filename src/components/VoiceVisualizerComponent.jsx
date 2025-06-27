import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceVisualizerComponent = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Voice Visualizer</h2>
      <button onClick={toggleListening}>
        {listening ? "Stop Listening" : "Start Listening"}
      </button>
      <button onClick={resetTranscript} style={{ marginLeft: "10px" }}>
        Clear
      </button>
      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
        }}
      >
        <strong>Transcript:</strong>
        <p>test : {transcript}</p>
      </div>
    </div>
  );
};

export default VoiceVisualizerComponent;

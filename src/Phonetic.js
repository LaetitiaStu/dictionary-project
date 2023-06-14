import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <ReactAudioPlayer
        src={props.phonetic.audio}
        autoPlay={false}
        controls={true}
      />
    </div>
  );
}

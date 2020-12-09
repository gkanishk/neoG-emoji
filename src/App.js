import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [emojiVal, setEmojiVal] = useState(
    "Type Your emoji or hover to know more.."
  );
  const emojis = {
    "😭": "crying",
    "✌🏻": "victory",
    "🖥": "computer",
    "🤔": "thinking",
    "😍": "wow",
    "😱": "screaming fear",
    "🤐": "zipper mouth face",
    "🤯": "exploding face",
    "🙉": "hear no evil monkey"
  };

  const searchEmoji = (e) => {
    var meaning = emojis[e.target.value];
    console.log(meaning);
    if (meaning) setEmojiVal((pre) => pre + meaning);
    else setEmojiVal("We don't have that in our databbase");
  };

  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input onChange={searchEmoji} placeholder="Type emoji you wanna search" />
      <h2>{emojiVal}</h2>
      <div>
        {Object.keys(emojis).map((emoji) => (
          <span
            onClick={() => setEmojiVal(emojis[emoji])}
            onMouseOver={() => setEmojiVal(emojis[emoji])}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
//See https://unicode.org/emoji/charts/full-emoji-list.html for unicode equivalents
const emojiList = [
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐คฃ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐คฉ',
  '๐',
  '๐',
  '๐',
  '๐คช',
  '๐',
  '๐ค',
  '๐คญ',
  '๐คซ',
  '๐ค',
  '๐ค',
  '๐คจ',
  '๐',
  '๐',
  '๐ถ',
  '๐',
  '๐',
  '๐',
  '๐ฌ',
  '๐คฅ',
  '๐',
  '๐',
  '๐ช',
  '๐คค',
  '๐ด',
  '๐ท',
  '๐ค',
  '๐ค',
  '๐คข',
  '๐คฎ',
  '๐คง',
  '๐ฅต',
  '๐ฅถ',
  '๐ฅด',
  '๐ต',
  '๐คฏ',
  '๐ค ',
  '๐ฅณ',
  '๐',
  '๐ค',
  '๐ง',
  '๐',
  '๐',
  '๐',
  'โน',
  '๐ฎ',
  '๐ฏ',
  '๐ฒ',
  '๐ณ',
  '๐ฅบ',
  '๐ฆ',
  '๐ง',
  '๐จ',
  '๐ฐ',
  '๐ฅ',
  '๐ข',
  '๐ญ',
  '๐ฑ',
  '๐',
  '๐ฃ',
  '๐',
  '๐',
  '๐ฉ',
  '๐ซ',
  '๐ฅฑ',
  '๐ค',
];
//Use this to set the maximum number of emojis a user can submit
const emojiLimit = 6;
const Emoji = props => {
  const { emoji, handleClick } = props;
  return (
    <button className="Emoji" onClick={() => handleClick(emoji)}>
      {emoji}
    </button>
  );
};
const EmojiPicker = props => {
  const { getChildState } = props;
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  //If parent component wants to get this state, pass cb into props. Converts Array to String of emojis to match backend data type.
  useEffect(() => {
    const selectedEmojisString = selectedEmojis.join('') + ',';
    if (getChildState) {
      getChildState(selectedEmojisString);
    }
  }, [selectedEmojis, getChildState]);
  const handleAddEmoji = emoji => {
    if (selectedEmojis.length < emojiLimit && !selectedEmojis.includes(emoji)) {
      setSelectedEmojis([...selectedEmojis, emoji]);
    }
  };
  const handleRemoveEmoji = emoji => {
    setSelectedEmojis(
      selectedEmojis.filter(selectedEmoji => selectedEmoji !== emoji)
    );
  };
  return (
    <div className="EmojiPicker">
      <Card title="Give Feedback" className="emoji-feedback-card">
        <div>
          {selectedEmojis.map(emoji => (
            <Emoji emoji={emoji} handleClick={handleRemoveEmoji} />
          ))}
        </div>
      </Card>
      <Card className="emoji-selection-card">
        {emojiList.map(emoji => (
          <Emoji emoji={emoji} handleClick={handleAddEmoji} />
        ))}
      </Card>
    </div>
  );
};
export default EmojiPicker;

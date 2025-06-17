function mapLetters(word) {
  const result = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (!result[char]) {
      result[char] = [];
    }

    result[char].push(i);
  }

  return result;
}


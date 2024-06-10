function findLongestWord(words){

    let tab= words.map(word => ({mot : word, longeur : word.length}));
   let longestword= tab.reduce((longest,current) => current.length >longest.length ? current : longest );
   return { mot:longestword.mot, longeur: longestword.longeur};
}
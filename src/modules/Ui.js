// eslint-disable-next-line import/prefer-default-export
export const DsisplayScores = (scoresArr) => {
  const scoreList = document.querySelector('.board');
  scoreList.innerHTML = '';
  scoresArr.sort((a, b) => b.score - a.score).forEach((item) => {
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'list-item';
    scoreListItem.innerHTML = `${item.user}:      ${item.score}`;
    scoreList.appendChild(scoreListItem);
  });
};
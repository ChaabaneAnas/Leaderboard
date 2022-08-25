export default function DsisplayScores(scoresArr) {
  const scoreList = document.querySelector('.board');
  scoreList.innerHTML = '';
  scoresArr.forEach((item) => {
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'list-item';
    scoreListItem.innerHTML = `${item.user}:  ${item.score}`;
    scoreList.appendChild(scoreListItem);
  });
}
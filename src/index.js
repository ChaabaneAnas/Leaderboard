import './style.css';
import APIhandel from './modules/APIhandler';
import DsisplayScores from './modules/Ui';

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', async () => {
  const scoresArr = await APIhandel.getScores();
  const { result } = scoresArr;
  console.log(result);
  DsisplayScores(result);
});

import './style.css';
import APIhandel from './modules/APIhandler';
import { DsisplayScores } from './modules/Ui';

document.addEventListener('DOMContentLoaded', async () => {
  const scoresArr = await APIhandel.getScores();
  const { result } = scoresArr;
  DsisplayScores(result);
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', async () => {
  const scoresArr = await APIhandel.getScores();
  const { result } = scoresArr;
  DsisplayScores(result);
});

const submit = document.querySelector('form');
submit.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const scoreValue = document.getElementById('score').value;
  APIhandel.addScore(userName, scoreValue);
  submit.reset();
});

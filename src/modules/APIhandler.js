export default class APIhandel {
static addGame = async (gameName) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({
      name: gameName,
    }),
    headers: {
      'Content-type': 'application/json; charest=UTF-8',
    },

  });
  const data = await response.json();
  return data;
};

static addScore = async (userName, scoreValue) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ri4eMO0ZLPuOutJGmvZK/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: scoreValue,
    }),
    headers: {
      'Content-type': 'application/json; charest=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

static getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ri4eMO0ZLPuOutJGmvZK/scores/').then((res) => res.json());
  return response;
};
}
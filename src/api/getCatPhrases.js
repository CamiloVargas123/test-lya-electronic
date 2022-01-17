const BASE_PATH = "https://catfact.ninja";

export function getCatPhrases(){
  const url = `${BASE_PATH}/fact`;

  return fetch(url).then(response => {
    return response.json();
  }).then(result => {
      return result;
  }).catch(e => {
    return false;
  })  
}
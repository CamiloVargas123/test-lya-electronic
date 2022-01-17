const BASE_PATH = "https://catfact.ninja";

export function getCatPhrases(amount){
  const url = `${BASE_PATH}/facts?limit=${amount}&max_length=80`;

  return fetch(url).then(response => {
    return response.json();
  }).then(result => {
      return result;
  }).catch(e => {
    return false;
  })  
}
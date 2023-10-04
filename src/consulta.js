module.exports = function edamam(params){
  let apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=ef0592fc&app_key=5961487d9e970f90fc7f8f7b0c3b803b`;
  const region = ['american', 'asian', 'caribbean', 'mexican', 'italian', 'chinese', 'south american']
  const tipo = ['breakfast', 'lunch', 'teatime', 'dinner']

  region.forEach(e => {
    if(params.indexOf(e) !== -1) apiUrl += `&cuisineType=${e}&`
  })
  tipo.forEach(e => {
    if(params.indexOf(e) !== -1) apiUrl += `&mealType=${e}&`
  })

  console.log(apiUrl)
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.hits)
}


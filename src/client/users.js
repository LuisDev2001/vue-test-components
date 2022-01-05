const URL_API = 'https://jsonplaceholder.typicode.com/'

export const getUsers = async () => {
  const URL = `${URL_API}users`;
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
const URL_API = 'https://jsonplaceholder.typicode.com/'

export const getUsers = async () => {
  const URL = `${URL_API}users`;
  const response = await fetch(URL)
  const data = await response.json()
  return data
}

export const getUserById = async (params) => {
  const URL = `${URL_API}users/${params.id}`;
  const response = await fetch(URL)
  const data = await response.json()
  return data
}
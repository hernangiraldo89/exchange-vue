const url = 'https://api.coincap.io/v2'

async function getAssets() {
  const response = await fetch(`${url}/assets?limit=20`)
  const data = await response.json()
  return data.data
}

export default {
  getAssets
}

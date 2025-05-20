const handler = async (event) => {
  
  const key = "FLAG{THANKS_FOR_PLAYING_SHUTA_CTF}";

  return {
    statusCode: 200,
    body: key,
  }
}

module.exports = { handler }
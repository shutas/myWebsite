const url = 'https://github.com/shutas/myWebsite/commits/main/';

const handler = async (event) => {
  try {
    const response = await fetch(url);
    const HTMLtext = await response.text();

    const startIndex = HTMLtext.lastIndexOf('>', HTMLtext.indexOf('</relative-time>')) + 1;
    const endIndex = HTMLtext.indexOf('</relative-time>');
    const lastUpdatedDateStr = HTMLtext.slice(startIndex, endIndex);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ value: lastUpdatedDateStr }),
    }
  } catch(error) {
    const errorMessage = "oops, something went very wrong... please try again later";
    
    return {
      statusCode: 500,
      body: JSON.stringify({ value: errorMessage }),
    }
  }
}

module.exports = { handler }
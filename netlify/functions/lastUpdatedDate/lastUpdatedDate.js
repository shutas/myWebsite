const url = 'https://github.com/shutas/myWebsite/commits/main/';

const modifyDateString = (oldDateString) => {
  const newDate = new Date(oldDateString);
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString("default", { month: "long" });
  const day = newDate.getDate();
  const nthNumber = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  return `${month} ${day}${nthNumber(day)}, ${year}`;
}

const handler = async (event) => {
  try {
    const response = await fetch(url);
    const HTMLtext = await response.text();

    const startIndex = HTMLtext.indexOf('Commits on') + 11;
    const lastUpdatedDateStr = HTMLtext.slice(startIndex, startIndex + 12);

    localStorage.setItem("myCat", "Tom");

    return {
      statusCode: 200,
      body: JSON.stringify({ value: modifyDateString(lastUpdatedDateStr)}),
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
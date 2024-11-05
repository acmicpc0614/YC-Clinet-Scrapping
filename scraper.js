const { Data } = require("./test.js"); // Correctly import Data from test.js
const BASE_URL = "https://www.startupschool.org/cofounder-matching/candidate/";

const haveFunding = (data) => {
  return data.startup.funding !== "N/A" && data.startup.funding !== "";
};

const howLongtimeSee = (data) => {
  let flag = false;
  if (data.lastSeen.includes("hour") || data.lastSeen.includes("today")) {
    flag = true;
  }
  return flag;
};

let filterdData = [];
const main = () => {
  console.log(Data);
  Data.forEach((dataitem) => {
    if (howLongtimeSee(dataitem) && haveFunding(dataitem)) {
      let out = {};
      out.link = BASE_URL + dataitem.userId;
      out.name = dataitem.name;
      out.equity = dataitem.cofounderPreferences.equity;
      out.lastSeen = dataitem.lastSeen;
      out.location = dataitem.location;
      out.startupName = dataitem.startup.name;
      out.startupDescription = dataitem.startup.description;
      out.startupProgress = dataitem.startup.progress;
      out.startupFunding = dataitem.startup.funding;
      out.sumary = dataitem.sumary;
      filterdData.push(out);
    }
  });

  console.log("Length is : ", filterdData.length);
  const ws = XLSX.utils.json_to_sheet(filterdData);

  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Export the workbook
  XLSX.writeFile(wb, "Filtereddata.xlsx");
};

// Call main only if you want to execute it on load. Remove if you want to run it only on button click.

const xlsx = require("xlsx");
const fs = require("fs");

const workbook = xlsx.readFile("pages/heymaxdata.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const jsonData = xlsx.utils.sheet_to_json(sheet);

if (jsonData.length > 0) {
    fs.writeFileSync("pages/excelData.json", JSON.stringify(jsonData[0], null, 2));
    console.log("Excel data extracted successfully:", jsonData[0]);
} else {
    console.error("No data found in Excel file.");
}

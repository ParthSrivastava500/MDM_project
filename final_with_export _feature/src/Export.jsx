import { mkConfig, generateCsv, asString } from "export-to-csv";
import { writeFile } from "node:fs";
import { Buffer } from "node:buffer";

// mkConfig merges your options with the defaults
// and returns WithDefaults<ConfigOptions>
const csvConfig = mkConfig({ useKeysAsHeaders: true });

const mockData = [
  {
    name: "Rouky",
    date: "2023-09-01",
    percentage: 0.4,
    quoted: '"Pickles"',
  },
  {
    name: "Keiko",
    date: "2023-09-01",
    percentage: 0.9,
    quoted: '"Cactus"',
  },
];

// Converts your Array<Object> to a CsvOutput string based on the configs
const csv = generateCsv(csvConfig)(mockData);
const filename = `${csvConfig.filename}.csv`;
const csvBuffer = new Uint8Array(Buffer.from(asString(csv)));

// Write the csv file to disk
writeFile(filename, csvBuffer, (err) => {
  if (err) throw err;
  console.log("file saved: ", filename);
});
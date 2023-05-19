export default async function getLastDump(selectedDb) {
  // Get the logs from OliveTin:
  const response = await fetch("http://192.168.64.17:1337/api/GetLogs");
  const OliveTinData = await response.json();
  const oneLogEntry = OliveTinData.logs[0];
  const db = [];
  const regexToGetDbName = /(?<=>)(.*)(?=<)/g;
  db.push(`${((oneLogEntry.stdout).match(regexToGetDbName))}, ${oneLogEntry.datetime}`);
  console.log(oneLogEntry.stdout);
  console.log(db)

  return await oneLogEntry;
};
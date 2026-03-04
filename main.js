const date = "202202";

const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/reserves");

url.searchParams.append("date", date);
url.searchParams.append("json", "");

console.log(url.toString());
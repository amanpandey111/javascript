//todo: work with functions - 1
// function getData() {
//   return Promise.resolve("Employee data fetched");
// }

// getData().then((data) => {
//   console.log(data);
// });

//todo: work with functions - 2
function getData() {
  return Promise.resolve("Employee data fetched");
}

async function displayData() {
  const data = await getData();
  console.log(data);
}

displayData();
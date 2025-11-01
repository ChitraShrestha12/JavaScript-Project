const div = document.querySelector("div");
const paragraphEle = document.createElement("p");
async function fetchData() {
  const randomNumberGenerator = Math.floor(Math.random() * 31);
  const url = `https://dummyjson.com/quotes/${randomNumberGenerator}`;
  const data = await fetch(url);
  const res = await data.json();
  [res].forEach((quote) => {
    paragraphEle.innerText = quote.quote;
    div.append(paragraphEle);
  });
}

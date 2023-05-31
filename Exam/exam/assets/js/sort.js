const artan = document.getElementById("artan");
const azalan = document.getElementById("azalan");
const container = document.querySelector(".container");


const data = [
  {
    time: "31.05.2023",
    name: "Aytac",
    text: "salam",
  },
  {
    time: "31.05.2023",
    name: "Nicat",
    text: "hello",
  },
  {
    time: "31.05.2023",
    name: "zeyneb",
    text: "sagol",
  },
  {
    time: "31.05.2023",
    name: "xanim",
    text: "bye",
  }

];

function create(obj) {
  const box=document.createElement("div");
  const time=document.createElement("p");
  const name=document.createElement("p");
  const text=document.createElement("p");

  time.innerText=obj.time;
  name.innerText=obj.name;
  text.innerText=obj.text

//   append 
  box.append(time, name,text);
  container.append(box);
}


data.forEach(x=>create(x))
artan.onclick = () => {
  container.innerHTML ="";
  data
    .sort((a,b) => (a.name > b.name ? 2 : (b.name > a.name ? -2 : 0)))
    .forEach((x) => create(x));
};

azalan.onclick = () => {
  container.innerHTML ="";
  data
    .sort((a,b) => (a.name < b.name ? 2 : (b.name < a.name ? -2 : 0)))
    .forEach((x) => create(x));
};

console.log(container);
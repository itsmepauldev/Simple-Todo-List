const addtask = document.getElementById("add");
let d = new Date();
let list = [];
let deletetask, updatetask, chcolor, dtime;
addtask.onclick = () => {
  let input = document.getElementById("input").value;
  if (input.trim() !== "") {
    list.push({ task: input, done: false });
    updatetask();
    document.getElementById("input").value = " ";
  }
};
updatetask = () => {
  document.getElementById("list").innerHTML = list
    .map(
      (item, index) => `

  <div style="opacity: ${item.done ? "50%" : "100%"}; text-decoration: ${
        item.done ? "line-through" : "none"
      }" class="font-semibold grid grid-cols-2  w-96 gap-40 my-3 font-[Poppins]"> 
         <div> 
  ${item.task} <br>
   <h3 class= "font-light text-[10px]">${dtime}</h3>
        </div>
        <div> 
        <button onclick="chcolor(${index})" class="fa-sharp fa-solid fa-check bg-[#2aa24b] text-white py-[2px] px-2 text-sm rounded-sm"${
        item.done ? 'style="display: none"' : ""
      } title ="Done"></button> 
      <button onclick="deletetask(${index})" class="fa-solid fa-trash bg-[#d33041] text-white py-[2px] px-2 text-sm rounded-sm"title ="Delete"></button>
      </div>
      
      </div>
        <hr class = "w-80">
        
`
    )

    .join("");
};
deletetask = (index) => {
  list.splice(index, 1);
  updatetask();
};
chcolor = (index) => {
  list[index].done = true;
  updatetask();
};
let hours = d.getHours() - 12 >= 12 ? "am" : "pm";
let mins = d.getMinutes() < 9 ? "0" : "";

dtime = `${d.getHours() - 12}: ${mins + d.getMinutes()} ${hours} ${d.getDate(
  2024
)}/${d.getMonth() + 1}/${d.getFullYear()}`;
document.getElementById("time").innerHTML = dtime;

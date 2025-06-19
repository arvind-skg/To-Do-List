
var Input=document.getElementById("Input")
var box=document.getElementById("box")
Input.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // prevent new line
    Add(); // add task
  }
});

function Add()
{
    var Box=document.createElement("div")
    var Task=document.createElement("h1")
    var dltbtn=document.createElement("button")
    var timeLabel = document.createElement("p");
    timeLabel.id = "task_time";
    Box.id="innerbox"
    Task.id="added_task"
    dltbtn.id="delete_btn"
    var now = new Date();
    var formattedTime = now.toLocaleString("en-IN", 
    {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    timeLabel.textContent =  formattedTime;
    dltbtn.onclick=Delete
    dltbtn.textContent="Delete"
    Task.textContent=Input.value 
    Box.appendChild(Task)
    Box.appendChild(timeLabel)
    Box.appendChild(dltbtn)
    box.append(Box)
    Input.value=""
}
function Delete(event)
{
    event.target.parentElement.remove()
}
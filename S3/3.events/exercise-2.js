function handleClick(event) {
    console.log(event);
    console.log(event.target.innerHTML);
}
document.getElementById('btn').addEventListener("click", handleClick);
document.getElementById("toggle-btn").onclick = () => {
    if(document.getElementById("menu").classList.contains("d-none")) {
        document.getElementById("menu").className = "navli"
    } else {
        document.getElementById("menu").className = "navli d-none"
    }
}
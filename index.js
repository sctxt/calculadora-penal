const art1 = document.getElementById("art1")
art1.onclick = function() {
    const corAtual = getComputedStyle(this).backgroundColor;

    if (corAtual === "rgb(0, 0, 255)") {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = "blue";
    }
}
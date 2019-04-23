const inputs = document.querySelectorAll(".controls input");

const change = function () {
    if (this.name === "blur") {
        document.documentElement.style.setProperty("--blur", `${this.value}px`);
        return;
    } else if (this.name === "spacing") {
        document.documentElement.style.setProperty("--spacing", `${this.value}px`);
        return;
    } else {
        document.documentElement.style.setProperty("--base", `${this.value}`);

    }
}

inputs.forEach(input => input.addEventListener("change", change));
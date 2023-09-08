document.addEventListener("scroll", () => {
    const ids = ["theo"]
    let elements = new Array();

    for (const id of ids) {
        elements.push(document.getElementById(id));
    }

    for (let element of elements) {
        const rect = element.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        const windowCenter = windowHeight / 2;
        
        if (rect.top <= windowCenter && rect.bottom >= windowCenter) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    }
})
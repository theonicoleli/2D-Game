document.addEventListener("scroll", () => {
    const ids = ["textoCriadores","theo", "pedro"]
    let elements = new Array();

    for (const id of ids) {
        elements.push(document.getElementById(id));
    }

    for (let element of elements) {
        const rect = element.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        const windowCenter = windowHeight / 2;
        
        if (rect.top*2 <= windowCenter && rect.bottom*2 >= windowCenter) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    }
})
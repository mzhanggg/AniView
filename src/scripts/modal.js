export function closeModalBtn() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}

export function closeModalWindow(event) {
    const modal = document.querySelector(".modal");

    if (event.target == modal) {
        modal.style.display = "none";
    };

}



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


export function openModal(event) {
    const modal = document.querySelector(".modal");
    const title = document.querySelector('h1');

    if (event.target === title) {
        modal.style.display = "block";
    }

}
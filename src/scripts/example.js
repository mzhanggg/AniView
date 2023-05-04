class Example {
    constructor(htmlElement) {
        this.htmlElement = htmlElement
        this.htmlElement.innerHTML = "<h1>It's alive</h1>"

        this.htmlElement.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick() {
        this.htmlElement.children[0].innerText = "Ouch"
    }
}

export default Example;
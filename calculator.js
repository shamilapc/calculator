let display = document.getElementById('input')

const displayData = (data) => {

    display.value += data

}
const clearAll = () => {
    display.value = ""
    display.placeholder = '0'
}
const removeLastItem = () => {
    display.value = display.value.slice(0, -1)
}



const displayOutput = () => {
    try {

        console.log("inside try");

        display.value = eval(display.value)

    }
    catch {
        console.log("inside catch");

        display.value = ""
        display.placeholder = "Invalid Expression"
    }

}





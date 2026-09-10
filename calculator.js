let inputData = document.getElementById('input')

const displayData = (data) => {

    inputData.value += data

}
const clearAll = () => {
    inputData.value = ""
    inputData.value = '0'
}
const removeLastItem = () => {
    inputData.value = inputData.value.slice(0, -1)
}



const displayOutput = () => {
    try {

        console.log("inside try");

        inputData.value = eval(inputData.value)

    }
    catch {
        console.log("inside catch");

        inputData.value = ""
        inputData.placeholder = "Invalid Expression"
    }

}





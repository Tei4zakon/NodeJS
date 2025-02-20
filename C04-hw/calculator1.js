const sobiranje = (num1, num2) => {
    return num1 + num2;
};

const odzemanje = (num1, num2) => {
    return num1 - num2;
};

const mnozenje = (num1, num2) => {
    return num1 * num2;
};

const delenje = (num1, num2) => {
    return num1 / num2;
};

const kvadrat = (num) => {
    return num * num;
};

const modulo = (num1, num2) => {
    return num1 % num2;
};

module.exports = {
    sobiranje,
    odzemanje,
    mnozenje,
    delenje,
    kvadrat,
    modulo,
}
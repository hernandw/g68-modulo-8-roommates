import fs from "fs";

export const addGastosQuery = async (newGasto) => {
    try {
        const gastos = JSON.parse(
            fs.readFileSync("./data/gastos.json", "utf-8")
        );
        gastos.gastos.push(newGasto);
        fs.writeFileSync("./data/gastos.json", JSON.stringify(gastos));
        return gastos;
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
};

export const getGastosQuery = async () => {
    try {
        const gastos = JSON.parse(
            fs.readFileSync("./data/gastos.json", "utf-8")
        );
        return gastos;
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    }
}
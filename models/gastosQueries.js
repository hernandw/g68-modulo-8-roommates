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

export const updateGastosQuery = async (newGasto) => {
    const { id } = newGasto;
    try {
      let { gastos}= JSON.parse(fs.readFileSync("./data/gastos.json", "utf-8"));
      gastos = gastos.map((gasto) => {
        if (gasto.id === id) {
          return newGasto;
        } else {
          return gasto;
        }
      });
      fs.writeFileSync("./data/gastos.json", JSON.stringify({ gastos }));
      return gastos;
    } catch (error) {
      console.log("Error code: ", error.code, "Error message: ", error.message);
    }
  };

  export const deleteGastosQuery = async (id) => {
    try {
      let { gastos } = JSON.parse(fs.readFileSync("./data/gastos.json", "utf-8"));
      /* gastos.gastos = gastos.gastos.filter((gasto) => gasto.id !== id); */
  
      gastos = gastos.filter((gasto) => gasto.id !== id);
      fs.writeFileSync("./data/gastos.json", JSON.stringify({ gastos }));
      return gastos;
    } catch (error) {
      console.log("Error code: ", error.code, "Error message: ", error.message);
    }
  };
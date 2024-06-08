import { addGastosQuery, getGastosQuery } from "../models/gastosQueries.js";

export const addGasto = async (req, res) => {
  try {
    const newGasto = req.body;
    const results = await addGastosQuery(newGasto);
    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGastos = async (req, res) => {
  try {
    const results = await getGastosQuery();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

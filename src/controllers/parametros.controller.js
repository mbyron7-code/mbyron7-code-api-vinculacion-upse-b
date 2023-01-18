import { Parametros } from "../models/Parametros.js";



// Funcion para hacer peticiones de consulta a la BaseDatos
export const getParametros = async (req, res) => {
  try {
    const parametro = await Parametros.findAll();
    // console.log(parametro) ; // mostrar por consola
    res.json(parametro);
  } catch (error) {
    return res.status(500).json({
      message: "Obtencion de todos los datos fallida",
    });
  }
};
// Funcion para crear una fila a la BaseDatos
export const createParametros = async (req, res) => {
  try {
    const { temperatura, emotor1, emotor2, eresistencia } = req.body;
    const newParametro = await Parametros.create({
      temperatura,
      emotor1,
      emotor2,
      eresistencia,
    });
    res.json(newParametro);
  } catch (error) {
    return res.status(500).json({
      message: "Creacion de datos fallida",
    });
  }
};
// Funcion para actualizar una fila con la id de la BaseDatos
export const updateParametro = async (req, res) => {
  try {
    const { id } = req.params;
    const { temperatura, emotor1, emotor2, eresistencia } = req.body;
    const parametro = await Parametros.findByPk(id);
		if (!parametro) {
      return res.status(404).json({
				message: "El parámetro no existe",
			})
		};
    parametro.temperatura = temperatura;
    parametro.emotor1 = emotor1;
    parametro.emotor2 = emotor2;
    parametro.eresistencia = eresistencia;
    await parametro.save();
    res.json(parametro);
  } catch (error) {
		return res.status(500).json({
      message: "Error al actualizar la fila",
    });
	}
};
// Funcion para eliminar una fila a la BaseDatos
export const deleteParametros = async (req, res) => {
  try {
    // Truncate the table
    await Parametros.destroy({
      truncate: true
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Eliminacion de dato fallida",
    });
  }
};

export const getParametro = async (req, res) => { 
	try {
    const { id } = req.params;
    const parametro = await Parametros.findByPk(id);
		if (!parametro) {
      return res.status(404).json({
				message: "El parámetro no existe",
			})
		};
    res.json(parametro);
		} catch (error) {
    return res.status(500).json({
			message: "Obtencion un datos fallida",
		})
	}
}
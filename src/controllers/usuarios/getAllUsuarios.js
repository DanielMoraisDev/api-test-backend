import getAll from "./functions/getAll.js";

const getAllUsuarios = async (req, res) => {
  try {
    const allUsers = await getAll(req)

    res.json({ message: allUsers })
  } catch (error) {
    console.error("[CONTROLLER USUARIOS GET ALL] Error: " + error);
  }
};

export default getAllUsuarios;

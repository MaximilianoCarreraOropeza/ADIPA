import apiManager from "./apiManager";

export const getSlots = async (url) => {
    const uri = 'estacionamiento/'+url;
  try {
    const result = await apiManager(uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },  
    });
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserByMatricula = async (url) => {
  const uri = 'usuario/matricula/'+url;
try {
  const result = await apiManager(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },  
  });
  return result.data;
} catch (error) {
  return error.response.data;
}};
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

export const getUserByMatricula = async (matricula) => {
  const uri = 'usuario/matricula/'+matricula;
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

export const postApi = async (url, data) => {
  try {
      const result = await apiManager(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
          data: data
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  };
  
  export const postChance = async (url, data) => {
    try {
      const result = await apiManager(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });
      return result.data;
    } catch (error) {
      return error.response.data;
    }
  };
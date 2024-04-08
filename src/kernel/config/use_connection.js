import apiManager from "./apiManager";

export const getSlots = async (url) => {
  const uri = 'estacionamiento/docencia/'+url;
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

export const getAll = async () => {
try {
const result = await apiManager("usuario/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },  
});
return result.data;
} catch (error) {
return error.response.data;
}
}

export const sendLogin = async (data) => {
  try {
      const result = await apiManager("auth/signin", {
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

export const getPetition = async() => {
  try{
    const result = await apiManager('externo/',{
      method: "GET",headers: {
        "Content-Type": "application/json",
      }, 
    })
    return result.data;
  } catch(error){
      return error.response.data;
  }
};

export const postPetition = async (data) => {
  try {
      const result = await apiManager("externo/", {
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

  export const putPetition = async (data) => {
    try {
        const result = await apiManager('externo/', {
          method: "PUT",
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

    export const deletePetition = async (id) => {
      const uri = "externo/" + id;
      try {
          const result = await apiManager(uri, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },  
          });
          return result.data;
        } catch (error) {
          return error.response.data;
        }
      };

      export const postUsuario = async (data) => {
        try {
            const result = await apiManager('usuario/', {
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

        export const postPersona = async (data) => {
          try {
              const result = await apiManager('persona/', {
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
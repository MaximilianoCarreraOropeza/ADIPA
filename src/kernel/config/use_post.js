import apiManager from "./apiManager";

export const postApi = async (url, data) => {
 if(url == "auth/signin"){ try {
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
  }} else {
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
  }
};
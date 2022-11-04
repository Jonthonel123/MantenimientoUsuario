const url = "https://6363105f66f75177ea3c9364.mockapi.io/registro";

export const getUserMantenimiento = async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (param) => {
  try {
    const data = await fetch(`http://localhost:3000/${param}`);
    const dataToJson = await data.json();
    return dataToJson;
  } catch (error) {
    return TemplateError(error);
  }
}

const TemplateError = (error) => `<div>${error}</div>`
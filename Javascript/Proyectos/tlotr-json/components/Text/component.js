//Esta función devuelve un parrafo que recibe el contenido del párrafo y el tamaño variante por parámetro ->

export const text = (content, size) => {
  return `<p class="text text--${size}">${content}</p>`
};

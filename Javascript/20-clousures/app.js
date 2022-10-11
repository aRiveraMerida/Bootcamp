//Clousures

const padre = () => {
  const name = "Peter";
  const hijo = () => {
    console.log(name)
  };
  return hijo;
};

const mix = padre();

mix();


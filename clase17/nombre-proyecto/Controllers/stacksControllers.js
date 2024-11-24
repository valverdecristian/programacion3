const moment = require("moment");

const getStacks = (req, res) => {
  console.log("envio en stacks tecnologicos");

  const date = moment();
  const year = date.format("yyyy");

  const tecnologias = [
    {
      name: "JS",
      img: "/images/imgjs.png",
      descripcion: "descrpcion de la tecnologia",
    },
    {
      name: "Node",
      img: "/images/imgnode.png",
      descripcion: "descrpcion de la tecnologia",
    },
    {
      name: "Express",
      img: "/images/imgexpress.png",
      descripcion: `descrpcion de la tecnologia`,
    },
  ];

  res.render("stacks", {
    titulo: "Mis stacks tecnologicos",
    h1: "Mis tecnologias son:",
    tecnologias,
    year,
  });
};

module.exports = { getStacks };

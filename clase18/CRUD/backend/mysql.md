<!-- creamos una base de datos -->
CREATE SCHEMA `posteosutn` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `posteosutn`.`posteos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(65) NOT NULL,
  `contenido` VARCHAR(280) NULL,
  `createAt` DATE NULL,
  `updateAt` DATE NULL,
  PRIMARY KEY (`id`));

  INSERT INTO `posteosutn`.`posteos` (`id`, `titulo`, `contenido`) VALUES ('1', 'titulo1', 'contenido1');
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2023 a las 20:28:29
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comentarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `comentarios` varchar(250) NOT NULL,
  `respuesta` varchar(250) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `nombre`, `comentarios`, `respuesta`, `fecha`) VALUES
(27, 'patricio', 'Buena pagina!', '0', '2023-12-02 16:44:20'),
(28, 'prueba', 'prueba de comentario', '0', '2023-12-02 17:49:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `huella_carbono_resultado`
--

CREATE TABLE `huella_carbono_resultado` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `resultado` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultado_quiz`
--

CREATE TABLE `resultado_quiz` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `puntuacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `correo`, `password`) VALUES
(3, 'patricio', 'asas@gmail.com', '12345'),
(4, 'prueba', 'prueba@gmail.com', '12345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `huella_carbono_resultado`
--
ALTER TABLE `huella_carbono_resultado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `resultado_quiz`
--
ALTER TABLE `resultado_quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `huella_carbono_resultado`
--
ALTER TABLE `huella_carbono_resultado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `resultado_quiz`
--
ALTER TABLE `resultado_quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2022 a las 00:23:55
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

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
(2, 'Emmanuel', 'mugarte5672@gmail.com', '12345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

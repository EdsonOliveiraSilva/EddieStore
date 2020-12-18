-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 18-Dez-2020 às 14:19
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estore`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `categoria`) VALUES
(1, 'Sony'),
(2, 'Microsoft'),
(3, 'Nintendo'),
(4, 'Controles'),
(5, 'Exclusivos');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`) VALUES
(5, 'Gustav', ' Quero meu Playstation'),
(8, 'Teste', ' 123456789'),
(9, 'wwwwwwwwwwwwwwwwwww', ' hjgjgjh');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `idpedidos` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(75) NOT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `telefone` int(11) DEFAULT NULL,
  `produto_comprado` varchar(100) NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `valor_total` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedidos`, `cliente`, `endereco`, `telefone`, `produto_comprado`, `valor_unitario`, `quantidade`, `valor_total`) VALUES
(1, 'Kratos ', 'Olimpo, 222', 111111111, 'Playstation 5', '4999.00', 1, '4599.00'),
(2, 'Mario', 'Cano 23', 47811097, 'Nintendo Swict', '2809.90', 2, '2519.90'),
(3, 'Master Chief', 'Planeta ix30', 999078890, 'Xbox Series X', '4599.00', 1, '4399.90');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE IF NOT EXISTS `produto` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` int(11) DEFAULT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idproduto`),
  UNIQUE KEY `imagem_UNIQUE` (`imagem`),
  KEY `id_categoria` (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `id_categoria`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 1, 'Sony', 'Playstation 5', '4999.00', '4599.00', './img/Ps5.jpg'),
(2, 1, 'Sony', 'playstation 4', '2599.90', '1869.00', './img/ps4.jpg'),
(3, 1, 'Sony', 'Playstation 3', '1300.00', '809.00', './img/ps3.jpg'),
(4, 2, 'Microsoft', 'Xbox Series', '4599.00', '4399.90', './img/xboxseries.jpg'),
(5, 2, 'Microsoft', 'Xbox One', '1799.00', '1500.50', './img/xone.jpg'),
(6, 2, 'Microsoft', 'Xbox 360', '900.00', '719.90', './img/360.jpg'),
(7, 3, 'Nintendo', 'Nintendo Swicth', '2809.90', '2519.90', './img/swicth.jpg'),
(8, 3, 'Nintendo', 'Nintendo wiiU', '1654.00', '1519.00', './img/wiiU.jpg'),
(9, 4, 'Controles', 'Controle PS4', '389.00', '309.00', './img/Controlps4.jpg'),
(10, 4, 'Controles', 'Controle Xbox One', '509.90', '399.00', './img/controlxboxone.jpg'),
(11, 4, 'Controles', 'Controle nintendo wiiU', '299.00', '259.00', './img/controlWiiU.jpg'),
(12, 5, 'Exclusivos', 'Controle PS3 Motoserra', '6309.00', '5019.00', './img/motoserra.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

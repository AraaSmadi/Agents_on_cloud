-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2022 at 03:41 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(250) NOT NULL,
  `comment` text NOT NULL,
  `user_id` int(250) NOT NULL,
  `name` varchar(255) NOT NULL,
  `P_id` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `comment`, `user_id`, `name`, `P_id`) VALUES
(9, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid.', 12, 'user', 1),
(10, 'ilg5tkhLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\nLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid.', 12, 'user', 1),
(11, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid.', 12, 'user', 1),
(12, 'hello', 12, 'araa', 1);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(200) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(1, 'araa', 'araasmadi2016@gmail.com', 'dfffffffffffffffffff'),
(2, 'araa', 'araasmadi2016@gmail.com', 'dfffffffffffffffffff'),
(3, 'araa', 'araasmadi2016@gmail.com', 'dfffffffffffffffffff'),
(4, 'alaa', 'araasmadi2016@gmail.com', 'ests'),
(5, 'alaa', 'araasmadi2016@gmail.com', 'ests'),
(6, 'alaa', 'araasmadi2016@gmail.com', 'ests'),
(7, 'er', 'araasmadi2016@gmail.com', 'erg4'),
(8, 'er', 'araasmadi2016@gmail.com', 'erg4'),
(9, 'er', 'araasmadi2016@gmail.com', 'erg4'),
(10, 'er', 'araasmadi2016@gmail.com', 'erg4'),
(11, 'ewf', 'araasmadi2@gmail.com', 'ecewf'),
(12, 'HTML', 'araa22@gmail.com', 'g5e4tg43'),
(13, 'HTML', 'araa22@gmail.com', 'g5e4tg43'),
(14, 'HTML', 'araa22@gmail.com', 'g5e4tg43'),
(15, 'HTML', 'araa22@gmail.com', 'g5e4tg43'),
(16, 'HTML', 'araa22@gmail.com', 'g5e4tg43'),
(17, 'HTML', 'araa22@gmail.com', 'g5e4tg43'),
(18, '', '', ''),
(19, 'araa', 'araasmadi2@gmail.com', 'ijh'),
(20, 'araa', 'araasmadi2@gmail.com', 'ijh'),
(21, 'araa', 'araasmadi2@gmail.com', 'ijh'),
(22, 'araa', 'araasmadi2@gmail.com', 'ijh'),
(23, 'araa', 'araasmadi2@gmail.com', 'ijh'),
(24, 'araa', 'araasmadi2@gmail.com', 'ijh'),
(25, 'araa', 'araasmadi2@gmail.com', 'ijh'),
(26, 'cfwe', 'araasmadi2016@gmail.com', 'ewfce'),
(27, 'cfwe', 'araasmadi2016@gmail.com', 'ewfce');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `pname` varchar(250) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(500) NOT NULL,
  `user_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `pname`, `price`, `description`, `image`, `user_id`) VALUES
(1, 'gjwedf2', 23, 'grwgvgv4', 'ahe5br5hr', 11),
(3, 'gjwedf1331241242422', 23, 'grwgvgv4', 'ahe5br5hr', 11),
(4, 'fdgb', 123, 'cdscew', 'fakepath\\Screenshot (10).png', 11),
(19, 'ataa', 13, 'ewferwf', 'C:\\fakepath\\8-ways-to-ensure-your-company-aligns-with-the-right-charities-640x302.webp', 11),
(20, 'fdgb', 25, 'defew', 'C:\\fakepath\\32-324921_lacmta-circle-purple-line-light-purple-circle-transparent.png', 11),
(30, 'dress', 123, 'fdsgfre', 'C:\\fakepath\\aa.webp', 12),
(31, '2fre', 2147483647, '', '', 27);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(150) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `email`, `password`, `id`) VALUES
('araa', 'araasmadi2016@gmail.com', '$2b$10$qT7.hH.nhKg/PmNtKzoRC.d0X0BdVuPI4OQmlwFde43m/XlhzCkNO', 11),
('araa', 'Hala2016@gmail.com', '$2b$10$QqQWGS8hlp6QdMMF9F3J1OAzMKLA5.Xz3tr76BowD75WjV9B5z3I6', 12),
('Ara\'a Smadi', 'araa2@gmail.com', '$2b$10$J9Jd10dYFMaAo0.R67R5Z.NL90UqXi1nK3mPT35w28xYQcB/aZpaa', 17),
('araa', 'araasmadi2016@gmail.com', '$2b$10$UYmtMh1AqHar3nMXCCsH2ufvGp/WcqZ1SNcvfRAEzl.W1kvqlkCPi', 18),
('araa', 'araasmadi2016@gmail.com', '$2b$10$WaomsHcJsVuHLCCoXXcUhOM3Ec0.p46DrEZ.Xgh7KtDyJHH6mAN8S', 19),
('araa', 'araasmadi2016@gmail.com', '$2b$10$.nY5l0mdkC.kzKsfwpqb1u9tTrDptO3XUHouZ7/psuMk9SC9WzEzi', 20),
('araa', 'araasmadi2016@gmail.com', '$2b$10$8Uox0T2.vxR8H2KW64c6MeknS6L.tZT3E8VZGB59yfIaR8D5KDElu', 21),
('araa', 'araa23@gmail.com', '$2b$10$mirEvkBS0A.MUnjBFgrY4Ocn76VTqteoVeCaom1K/4DCs2vJ7h.fO', 22),
('araa', 'araa23@gmail.com', '$2b$10$dv0HtwP3LwEzd40imFAuZeSgfRr3kEUzLwzFvvJx.7W0Jp8q9P.oW', 23),
('sara', 'sara3@gmail.com', '$2b$10$f4g8HQuQIxFtkcPevMwyN.c3YAknHKW0VIh035FAzTuInLbvSEiaG', 24),
('CSS', 'araasmadi2016@gmail.com', '$2b$10$qkkbnAfJHfa61JaOlgxyNeriKS133Dc33h8M/WrCtcgM6n9voSz0C', 26),
('', '', '$2b$10$U4FoDwvOcwJoJNqI3cscwOPo5EJVL/MOvj4a.yOFvhBzqmvyx1LnO', 27);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

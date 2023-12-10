-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2023 at 02:16 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carrentify_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_ID` int(11) NOT NULL,
  `Emp_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cash_payments`
--

CREATE TABLE `cash_payments` (
  `Cash_Order_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `Company` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `Rental_No` int(11) NOT NULL,
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `Contact_no` varchar(20) DEFAULT NULL,
  `Payment_Method` varchar(255) DEFAULT NULL,
  `No_Passengers` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `License_no` int(11) NOT NULL,
  `Emp_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Emp_ID` int(11) NOT NULL,
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `online_payments`
--

CREATE TABLE `online_payments` (
  `Online_Order_ID` int(11) NOT NULL,
  `Account_Number` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_receipt`
--

CREATE TABLE `order_receipt` (
  `Receipt_ID` int(11) NOT NULL,
  `Order_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `Package_ID` int(11) NOT NULL,
  `Car_ID` int(11) DEFAULT NULL,
  `Rental_No` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `Order_ID` int(11) NOT NULL,
  `Rental_No` int(11) DEFAULT NULL,
  `Day` int(11) DEFAULT NULL,
  `Month` int(11) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Reference_No` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sedan`
--

CREATE TABLE `sedan` (
  `Plate_no` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `van`
--

CREATE TABLE `van` (
  `Plate_no` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `Car_ID` int(11) NOT NULL,
  `Plate_no` char(10) DEFAULT NULL,
  `License_no` int(11) DEFAULT NULL,
  `Seat_Capacity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_ID`),
  ADD KEY `Emp_ID` (`Emp_ID`);

--
-- Indexes for table `cash_payments`
--
ALTER TABLE `cash_payments`
  ADD PRIMARY KEY (`Cash_Order_ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`Company`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Rental_No`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`License_no`),
  ADD KEY `Emp_ID` (`Emp_ID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`Emp_ID`);

--
-- Indexes for table `online_payments`
--
ALTER TABLE `online_payments`
  ADD PRIMARY KEY (`Online_Order_ID`);

--
-- Indexes for table `order_receipt`
--
ALTER TABLE `order_receipt`
  ADD PRIMARY KEY (`Receipt_ID`),
  ADD KEY `Order_ID` (`Order_ID`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`Package_ID`),
  ADD KEY `Car_ID` (`Car_ID`),
  ADD KEY `Rental_No` (`Rental_No`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`Order_ID`),
  ADD KEY `Rental_No` (`Rental_No`);

--
-- Indexes for table `sedan`
--
ALTER TABLE `sedan`
  ADD PRIMARY KEY (`Plate_no`);

--
-- Indexes for table `van`
--
ALTER TABLE `van`
  ADD PRIMARY KEY (`Plate_no`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`Car_ID`),
  ADD KEY `License_no` (`License_no`),
  ADD KEY `Plate_no` (`Plate_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `Admin_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cash_payments`
--
ALTER TABLE `cash_payments`
  MODIFY `Cash_Order_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `Company` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `Rental_No` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `Emp_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `online_payments`
--
ALTER TABLE `online_payments`
  MODIFY `Online_Order_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_receipt`
--
ALTER TABLE `order_receipt`
  MODIFY `Receipt_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `Package_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `Order_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `Car_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`Emp_ID`) REFERENCES `employee` (`Emp_ID`);

--
-- Constraints for table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`Emp_ID`) REFERENCES `employee` (`Emp_ID`);

--
-- Constraints for table `order_receipt`
--
ALTER TABLE `order_receipt`
  ADD CONSTRAINT `order_receipt_ibfk_1` FOREIGN KEY (`Order_ID`) REFERENCES `payment_method` (`Order_ID`);

--
-- Constraints for table `package`
--
ALTER TABLE `package`
  ADD CONSTRAINT `package_ibfk_1` FOREIGN KEY (`Car_ID`) REFERENCES `vehicle` (`Car_ID`),
  ADD CONSTRAINT `package_ibfk_2` FOREIGN KEY (`Rental_No`) REFERENCES `customer` (`Rental_No`);

--
-- Constraints for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD CONSTRAINT `payment_method_ibfk_1` FOREIGN KEY (`Rental_No`) REFERENCES `customer` (`Rental_No`);

--
-- Constraints for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD CONSTRAINT `vehicle_ibfk_3` FOREIGN KEY (`License_no`) REFERENCES `driver` (`License_no`),
  ADD CONSTRAINT `vehicle_ibfk_4` FOREIGN KEY (`Plate_no`) REFERENCES `sedan` (`Plate_no`) ON DELETE CASCADE,
  ADD CONSTRAINT `vehicle_ibfk_5` FOREIGN KEY (`Plate_no`) REFERENCES `van` (`Plate_no`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

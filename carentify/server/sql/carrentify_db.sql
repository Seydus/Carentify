-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2023 at 06:15 AM
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
  `Admin_ID` int(20) NOT NULL,
  `Emp_ID` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Admin_ID`, `Emp_ID`) VALUES
(1, 1),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `cash_payments`
--

CREATE TABLE `cash_payments` (
  `Cash_Order_ID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cash_payments`
--

INSERT INTO `cash_payments` (`Cash_Order_ID`) VALUES
(1),
(2);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `Company` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`Company`) VALUES
(1),
(2),
(3),
(4),
(5);

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
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Rental_No`, `First_Name`, `Last_Name`, `Contact_no`, `Payment_Method`, `email`) VALUES
(101, 'Juan', 'Dela Cruz', '+639171234567', 'Online Payment', 'juan@gmail.com'),
(102, 'Maria', 'Santos', '+639181234567', 'Cash Payment', NULL),
(103, 'Jose', 'Lopez', '+639191234567', 'Online Payment', NULL),
(104, 'Rosa', 'Gonzalez', '+639201234567', 'Cash Payment', NULL),
(105, 'Carlos', 'Reyes', '+639211234567', 'Online Payment', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `License_no` int(20) NOT NULL,
  `Emp_ID` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`License_no`, `Emp_ID`) VALUES
(101, 2),
(102, 4);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Emp_ID` int(20) NOT NULL,
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`Emp_ID`, `First_Name`, `Last_Name`, `Position`) VALUES
(1, 'John', 'Doe', 'Admin'),
(2, 'Jane', 'Smith', 'Driver'),
(3, 'Bob', 'Johnson', 'Admin'),
(4, 'Alice', 'Jones', 'Driver'),
(5, 'Charlie', 'Brown', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `location_details`
--

CREATE TABLE `location_details` (
  `id` int(11) NOT NULL,
  `pickUpLocation` varchar(255) NOT NULL,
  `dropOffLocation` varchar(255) NOT NULL,
  `pickUpDate` date NOT NULL,
  `dropOffDate` date NOT NULL,
  `pickUpTime` time NOT NULL,
  `dropOffTime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `online_payments`
--

CREATE TABLE `online_payments` (
  `Online_Order_ID` int(20) NOT NULL,
  `Account_Number` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `online_payments`
--

INSERT INTO `online_payments` (`Online_Order_ID`, `Account_Number`) VALUES
(1, 987654321),
(3, 654321987);

-- --------------------------------------------------------

--
-- Table structure for table `order_receipt`
--

CREATE TABLE `order_receipt` (
  `Receipt_ID` int(20) NOT NULL,
  `Order_ID` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_receipt`
--

INSERT INTO `order_receipt` (`Receipt_ID`, `Order_ID`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `Package_ID` int(20) NOT NULL,
  `Car_ID` int(20) DEFAULT NULL,
  `Rental_No` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`Package_ID`, `Car_ID`, `Rental_No`) VALUES
(1, 1, 101),
(2, 2, 102),
(3, 1, 103),
(4, 2, 104),
(5, 1, 105);

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `Order_ID` int(20) NOT NULL,
  `Rental_No` int(20) DEFAULT NULL,
  `Day` int(20) DEFAULT NULL,
  `Month` int(20) DEFAULT NULL,
  `Year` int(20) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Reference_No` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`Order_ID`, `Rental_No`, `Day`, `Month`, `Year`, `Type`, `Reference_No`) VALUES
(1, 101, 8, 12, 2023, 'Online Payment', 123456),
(2, 102, 8, 12, 2023, 'Cash Payment', 789012),
(3, 103, 8, 12, 2023, 'Online Payment', 345678),
(4, 104, 8, 12, 2023, 'Cash Payment', 901234),
(5, 105, 8, 12, 2023, 'Online Payment', 567890);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `Car_ID` int(20) NOT NULL,
  `Plate_no` char(10) DEFAULT NULL,
  `License_no` int(20) DEFAULT NULL,
  `Seat_Capacity` int(20) DEFAULT NULL,
  `vehicleMake` varchar(255) DEFAULT NULL,
  `vehicleType` varchar(255) DEFAULT NULL,
  `transmission` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`Car_ID`, `Plate_no`, `License_no`, `Seat_Capacity`, `vehicleMake`, `vehicleType`, `transmission`, `price`) VALUES
(1, 'ABC123', 101, 4, 'Hyundai', 'Sedan', 'Manual', 8371),
(2, 'XYZ456', 102, 6, 'Toyota', 'Van', 'Automatic', 13561);

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
-- Indexes for table `location_details`
--
ALTER TABLE `location_details`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `location_details`
--
ALTER TABLE `location_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `Car_ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `vehicle_ibfk_3` FOREIGN KEY (`License_no`) REFERENCES `driver` (`License_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

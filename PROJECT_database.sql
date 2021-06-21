-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: PROJECT
-- ------------------------------------------------------
-- Server version	8.0.19-0ubuntu5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `PROJECT`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `PROJECT` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `PROJECT`;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `employeeID` varchar(8) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password_hash` varchar(256) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employeeID`),
  UNIQUE KEY `employeeID` (`employeeID`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('111','Edward','Norton','040277865435','en@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$9VCjAIjyMDxVHTZBl67MfA$7kTROvK//1pJw2RV5Q8VeFbbXrD8PhZ4LvFFWhvFWNU',2,NULL),('123','123','123','122345','123@123','$argon2i$v=19$m=4096,t=3,p=1$xqM8b7Ko+yRkIXzS4U4z9A$hVN51QhMxD30XmBZlDNDQtd0Qsnun/RyyzemZ1BNG9k',2,NULL),('123456','123','123','5653643','123@12345','$argon2i$v=19$m=4096,t=3,p=1$5Ual4Nx6Ps4YaZt5xKqyhw$cadUOHJ3lQCgYuwsaamVxlriwA633Kc8jDmub9qmi2s',2,NULL),('a1675122','Ran','Qi','0420671016','ran.qi.mandarin@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$1yMcb+Tw8/xD6WIxKfx3Ew$IbChkEyNlfSeNmqRkyBal5sGKvWtzkcM6Y7B+DR7rA4',2,NULL),('aaaaaa','aa','bb','123456','aaa@ddd','$argon2i$v=19$m=4096,t=3,p=1$C9cxOTIN1Ext4x8ybt8slA$DK+eBC6foDiBE6L7n1aTQtapomJUgXdGCuhWSanUeN0',2,NULL),('sa111111','Delores','Abernathy','0402111155','da@ww.com','$argon2i$v=19$m=4096,t=3,p=1$KnROmdQf/jXjowrISDzN3Q$bwQuDjcSGIriTw1epgewy2oXIu2+08NCcLmh6jydDnE',2,NULL),('sa12345','123','123','123456','123@123.com','$argon2i$v=19$m=4096,t=3,p=1$zduL+d3HLaEL6uFUSTWvGQ$rg07dW3M3rkq3aRkL5fPcgkYItyOce33m2tVlqMdiRo',2,NULL),('sa22222','Bernard','lowe','040222222','bl@ww.com','$argon2i$v=19$m=4096,t=3,p=1$d3vHhitAYDQM1ZN03/RAGw$wtoS55THthRZSArcokQQKzwGeCf6oKCiKDm5XbvadvQ',2,NULL),('sa333333','Peanut','Butter','0402333333','pb@gmai.com','$argon2i$v=19$m=4096,t=3,p=1$QH3DPzvMDm3o4V27RtHfDQ$6qgO7HHglXs2Xgho9k9Njlz2DSd++ss7WQB9SjwaU5A',2,NULL),('sa444444','Franz','Schubet','0402444444','fs@ww.com','$argon2i$v=19$m=4096,t=3,p=1$upj5h8aZU9NlWnujJ7STAw$WxLq3c88ibuUAhTFXx9Is/dcDCH7XeU3sEyvPAn8jcg',2,NULL),('sa555555','test5f','test5l','0402555555','test5@admin.com','$argon2i$v=19$m=4096,t=3,p=1$7hWAtC19DTI4y04evGc64Q$WoduB02HQ9iQli3M0+S/mKcvxRXBISOa3a951lbR6bE',2,NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `allHotspots`
--

DROP TABLE IF EXISTS `allHotspots`;
/*!50001 DROP VIEW IF EXISTS `allHotspots`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `allHotspots` AS SELECT 
 1 AS `id`,
 1 AS `venue_id`,
 1 AS `start_date`,
 1 AS `name`,
 1 AS `number_venue`,
 1 AS `street`,
 1 AS `suburb`,
 1 AS `postcode`,
 1 AS `city`,
 1 AS `state`,
 1 AS `manager_id`,
 1 AS `longitude`,
 1 AS `latitude`,
 1 AS `code`,
 1 AS `end_date`,
 1 AS `active`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `checkin`
--

DROP TABLE IF EXISTS `checkin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkin` (
  `checkin_id` int NOT NULL AUTO_INCREMENT,
  `checkin_date` datetime DEFAULT NULL,
  `indi_id` int DEFAULT NULL,
  `venue_id` int DEFAULT NULL,
  PRIMARY KEY (`checkin_id`),
  KEY `venue_id` (`venue_id`),
  KEY `indi_id` (`indi_id`),
  CONSTRAINT `checkin_ibfk_2` FOREIGN KEY (`venue_id`) REFERENCES `venue` (`venue_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `checkin_ibfk_3` FOREIGN KEY (`indi_id`) REFERENCES `individual` (`indi_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkin`
--

LOCK TABLES `checkin` WRITE;
/*!40000 ALTER TABLE `checkin` DISABLE KEYS */;
INSERT INTO `checkin` VALUES (1,'2021-06-03 00:00:00',1,1),(2,'2021-06-03 00:00:00',1,NULL),(3,'2021-06-06 00:00:00',1,1),(4,'2021-06-06 00:00:00',1,NULL),(5,NULL,NULL,NULL),(6,'2021-06-06 00:00:00',1,1),(7,'2021-06-06 00:00:00',1,1),(8,NULL,NULL,NULL),(9,'2021-06-07 00:00:00',6,1),(10,'2021-06-07 00:00:00',6,NULL),(11,'2021-06-07 00:00:00',6,NULL),(12,'2021-06-08 00:00:00',6,NULL),(13,'2021-06-08 00:00:00',6,1),(14,'2021-06-08 00:00:00',6,1),(15,'2021-06-08 00:00:00',6,1),(16,'2021-06-08 00:00:00',6,1),(17,'2021-06-08 00:00:00',6,1),(18,'2021-06-08 00:00:00',6,1),(19,'2021-06-08 00:00:00',6,1),(20,'2021-06-08 00:00:00',6,1),(21,'2021-06-08 00:00:00',6,1),(22,'2021-06-08 00:00:00',6,1),(23,'2021-06-09 00:00:00',6,1),(24,'2021-06-09 00:00:00',6,1),(25,'2021-06-09 00:00:00',6,1),(26,'2021-06-09 00:00:00',6,1),(27,'2021-06-10 00:00:00',6,NULL),(28,'2021-06-10 00:00:00',6,1),(29,'2021-06-11 00:00:00',6,1),(30,'2021-06-11 11:51:23',6,1),(31,'2021-06-12 06:59:16',6,3),(32,'2021-06-12 08:33:34',8,1),(33,'2021-06-12 08:34:56',8,3),(34,'2021-06-12 10:13:46',8,20),(35,'2021-06-12 11:54:30',8,23),(36,'2021-06-12 12:21:48',6,23),(37,'2021-06-12 12:23:17',6,23),(39,'2021-06-12 13:34:29',12,4),(40,'2021-06-12 13:35:42',12,15),(41,'2021-06-12 13:35:53',12,10),(42,'2021-06-12 13:38:38',12,11),(43,'2021-06-12 13:38:50',12,16),(44,'2021-06-12 13:51:21',12,23),(45,'2021-06-12 14:03:16',12,7),(46,'2021-06-12 14:33:34',12,NULL),(47,'2021-06-12 14:43:53',12,7),(48,'2021-06-12 14:44:26',12,23),(49,'2021-06-13 05:04:29',6,NULL),(50,'2021-06-13 05:08:32',6,NULL),(51,'2021-06-13 05:08:45',6,23),(52,'2021-06-13 05:10:14',6,NULL),(53,'2021-06-13 06:30:09',12,NULL),(54,'2021-06-13 06:30:20',12,1),(55,'2021-06-13 06:35:56',12,1),(56,'2021-06-13 06:38:35',12,1),(57,'2021-06-13 06:40:06',12,1),(58,'2021-06-13 06:48:51',12,1),(59,'2021-06-13 06:50:33',6,1),(60,'2021-06-13 06:51:06',6,1),(61,'2021-06-13 06:52:41',6,1),(62,'2021-06-13 06:56:07',6,1),(63,'2021-06-13 06:56:23',6,NULL),(64,'2021-06-13 07:01:31',12,NULL),(65,'2021-06-13 07:01:43',12,1),(66,'2021-06-13 07:07:24',12,NULL),(67,'2021-06-13 07:07:34',12,1),(68,'2021-06-13 07:14:55',12,NULL),(69,'2021-06-13 07:15:05',12,1),(70,'2021-06-13 07:20:08',12,NULL),(71,'2021-06-13 07:20:17',12,1),(72,'2021-06-14 04:14:56',12,1),(73,'2021-06-14 04:15:27',12,1),(74,'2021-06-14 04:17:16',12,7);
/*!40000 ALTER TABLE `checkin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `currentHotspots`
--

DROP TABLE IF EXISTS `currentHotspots`;
/*!50001 DROP VIEW IF EXISTS `currentHotspots`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `currentHotspots` AS SELECT 
 1 AS `id`,
 1 AS `venue_id`,
 1 AS `start_date`,
 1 AS `name`,
 1 AS `number_venue`,
 1 AS `street`,
 1 AS `suburb`,
 1 AS `postcode`,
 1 AS `city`,
 1 AS `state`,
 1 AS `manager_id`,
 1 AS `longitude`,
 1 AS `latitude`,
 1 AS `code`,
 1 AS `end_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `hotspots`
--

DROP TABLE IF EXISTS `hotspots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotspots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `venue_id` int DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `venue_id` (`venue_id`),
  CONSTRAINT `hotspots_ibfk_1` FOREIGN KEY (`venue_id`) REFERENCES `venue` (`venue_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotspots`
--

LOCK TABLES `hotspots` WRITE;
/*!40000 ALTER TABLE `hotspots` DISABLE KEYS */;
INSERT INTO `hotspots` VALUES (15,1,'2021-06-03 03:00:00','2021-06-11 23:59:00'),(17,3,'2021-06-11 18:08:00','2021-06-20 00:00:00'),(18,9,'2021-06-12 03:00:00','2021-06-14 00:00:00'),(19,16,'2021-06-10 03:00:00','2021-06-30 23:59:00'),(20,7,'2021-06-12 16:25:00','2021-06-15 16:25:00'),(21,NULL,'2021-06-11 19:08:00','2021-06-19 19:08:00'),(32,12,'2021-06-05 13:56:00','2021-06-06 13:57:00'),(34,4,'2021-06-11 16:19:00','2021-06-26 16:21:00'),(35,20,'2021-06-15 23:08:00','2021-07-16 23:08:00');
/*!40000 ALTER TABLE `hotspots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `individual`
--

DROP TABLE IF EXISTS `individual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `individual` (
  `indi_id` int NOT NULL AUTO_INCREMENT,
  `last_name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `DOB` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password_hash` varchar(256) DEFAULT NULL,
  `role` int NOT NULL,
  `address` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`indi_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `individual`
--

LOCK TABLES `individual` WRITE;
/*!40000 ALTER TABLE `individual` DISABLE KEYS */;
INSERT INTO `individual` VALUES (1,'nguyen','long','2001-01-23','gh@gmail.com','09057637576','long2201','helloworld',0,'5 Norht Terrace'),(2,'filan','shane','2001-01-22','shane@gmail.com','0905763755','shane0402',NULL,0,''),(4,'long','nguyen','2001-01-22','long2@gmail.com','0957365838','long2','$argon2i$v=19$m=4096,t=3,p=1$WTfYvLvhOcSVp7W+u7c4Ow$WMAiVNZ8X6d4m4xmWgdk6ekyeMHPUb1sA0eVDBfgby0',0,''),(5,'Cash','Johny','2001-01-22','Johny.cash@gmail.com','042047543985','test2','$argon2i$v=19$m=4096,t=3,p=1$GrHBDUJO0WbBTKI9hxRc9A$lwf2iESfkgitNncsYn8Kw3ou3RFEfqCrmUnyADDL0lo',0,'1234'),(6,'nguyen','hung','2001-01-22','nguyennhulong22012001@gmail.com','0421778009','hungnguyen','$argon2i$v=19$m=4096,t=3,p=1$8ZjrZSX2jdm+Zr+Tw5192g$qf0Xprl4UOXOZXvt1d5Rrp+GFAKykKmdpt1dDtlvx0A',0,'7 Fredwick St'),(7,'indi1l','indi1f','2001-01-22','indi1@individual.com','0400111111','indi1','$argon2i$v=19$m=4096,t=3,p=1$1DWdQNgWSC1PKklguO+X4w$Sxbal6spfHrefA/ZeuZbCm8yq16ZlyWzdNqd1APpuzY',0,''),(8,'nguyen','josh','2001-01-22','josh@gmail.com','364574','josh123','$argon2i$v=19$m=4096,t=3,p=1$3SsqMrreoMPXaET+0zQOAw$RPNi/hPEKVOt3xlLWm2QyNk7haRgHsGGVxcZIYTiNJE',0,'43 Galway St'),(9,'Simon','Anna','2001-01-22','annasimon@gmail.com','0421778887','annasimon','$argon2i$v=19$m=4096,t=3,p=1$s4dv2CYbf+2Lcd4japSQFQ$X075FKud/hLH57poWrUx+hNYFubprui1D/VrL6jeNDE',0,'56 Good street'),(10,'swift','era','2001-01-22','taylor123@gmail.com','6958765','taylor123','$argon2i$v=19$m=4096,t=3,p=1$ti7cKJhPfNKL54eTB8h0AA$jslESYwIpvng56iFZIMO1NBQAia553vnjth59aiZ8tM',0,'75 St'),(12,'Nguyen','Nhu Long','2001-01-22','a1787526@student.adelaide.edu.au','0425854739','nhulong2001','$argon2i$v=19$m=4096,t=3,p=1$lYKVcXqEZPqQ7l7Nnv0LLw$oOSbANCoKY0WVVNuJ7UM94gjqOQou7f0EF/ozuppUeI',0,'8 Gulnare Grove '),(13,'Truong','Rebecca','2001-01-22','rebeccatruong@gmail.com','0421712345','rebeccatruong','$argon2i$v=19$m=4096,t=3,p=1$Kj8SHmh4385XD++99auUYw$UTixrc52pJjHpt4qAzBx5b86qyXHDkrnXHBJhv8TmKM',0,'54 Hello Street'),(14,'Nguyen','Vy','2001-01-22','nhatvy987@gmail.com','0421770986','nhatvy987@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$6AtCf03QnCVmwshpq9/amw$z70d2ztatZ8birBZ5B+YSKIqe9Ru09FMgngF+OHcwTo',0,'8y Henley Beach Road Fulham'),(15,'Milky','Silky','2021-02-02','silky@gmail.com','0400888888','silky','$argon2i$v=19$m=4096,t=3,p=1$Jvmei1edpkYs6Umtvr8Ycw$ePJ+DbWZgOZUKx6WSHA+7Ra3eqoCDNPh/lhiguNqsu8',0,'21 Church Road'),(16,'Qi','Ran','2021-06-03','ade@gmail.com','0420671016','rq','$argon2i$v=19$m=4096,t=3,p=1$jWg0Rq4Mi76GFUE/UBmdFg$KurKwaAtaaltthjXCmFzOACUX8rm1Jsr929TBQT6Hho',0,'21 Church Road'),(17,'example','user','2021-06-14','user_example@gmail.com','0421770009','user_example','$argon2i$v=19$m=4096,t=3,p=1$0UTr681dCZwcNHn7yfh6Og$263zyDtyPbtPzkSWDEI68f2K4pcMqhIWxa5p0q+Mz1o',0,'23 Good Street'),(18,'nguyen','vy','2021-06-14','vievie@gmail.com','04217700009','vievie','$argon2i$v=19$m=4096,t=3,p=1$6XoHJv3TiwpNzvQrihzMJQ$l7l76SNyc7eQ/nW7I7ZTqoxW/mgmrrqF/k2w+avfD+I',0,'34 Good street');
/*!40000 ALTER TABLE `individual` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password_hash` varchar(256) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `DOB` varchar(20) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES (2,'Ran','Qi','ran.qi.mandarin@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$n1mrL/n9v5qH8QurLOABTQ$mFDZ1vleD9PC9u6E+4rj238C9/VXwTD0sCFmf9YBHLM','fff','0420671016',1,'2001-02-09',NULL),(5,'manager2','company2','manager2@company2.com','$argon2i$v=19$m=4096,t=3,p=1$IHKnXv3zaptQUb33ICFiGA$70KB94qSYAdh3algEdfNVa9s6CNflDIcZIaJecq+DDE','man2','0420222222',1,'2001-02-09',NULL),(6,'chris','chriss','a1787854@student.adelaide.edu.au','$argon2i$v=19$m=4096,t=3,p=1$VFOK3qGG0e7pGx5srbZgXA$g/iz23a8L1OEtlwjU4Bl5Cp0H6yPVJFtWuHQOXaLwbM','andy2201','05439857239',1,'2001-02-02','12 SA St'),(17,'Pink','Floyd','pink.floyd@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$00dGcDNMDrh9lXiXvMbgVw$1QUb9M4NCtBlA1ZAaCIgtQgVbvQA5u0mGKLMh32MrvA','test25','040187564564',1,'1920-01-01','test25'),(18,'test6','test6','test6@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$WXEoVGeQqOgItaNnx2P4wQ$RcspWolGFgFfGB/+zuR3nhxFMrc59nf2nRFAE/JJGrM','test6','04016666666',1,'2001-02-09','21 Church Road'),(19,'Ran','Qi','ran7@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$77TRgI8yMxwvrIh1sdREcQ$5hYp7JavwyARqZGi836AAROxicLF5IKpprktkTlXcTM','test7','1234567',1,'2001-02-09','21 Church Road'),(20,'mana','manager1l','1212@gmail.com','$argon2i$v=19$m=4096,t=3,p=1$uaBM49JjFey81OHbQePAjw$ltOcNKPJs6vFgxH9ISTHRK1D4VaMtd6ISTzoSx9Vlrs','mana1','0420671016',1,'2021-06-03','21 Church Road');
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue`
--

DROP TABLE IF EXISTS `venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue` (
  `venue_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `number_venue` varchar(20) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `suburb` varchar(100) DEFAULT NULL,
  `postcode` int DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `manager_id` int DEFAULT NULL,
  `longitude` double(180,8) DEFAULT NULL,
  `latitude` double(180,8) DEFAULT NULL,
  `code` int NOT NULL,
  PRIMARY KEY (`venue_id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `name` (`name`),
  KEY `fk_manager_id` (`manager_id`),
  CONSTRAINT `fk_manager_id` FOREIGN KEY (`manager_id`) REFERENCES `manager` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue`
--

LOCK TABLES `venue` WRITE;
/*!40000 ALTER TABLE `venue` DISABLE KEYS */;
INSERT INTO `venue` VALUES (1,'kfc','8','Avenue','Walkerville',6000,'Ade','SA',6,138.63228760,-34.86121180,101010),(3,'University of Adelaide',NULL,NULL,NULL,NULL,'Ade','SA',5,138.60491100,-34.92021750,303030),(4,'Mary\'s shoe shop','12','Rundle','',NULL,'Ade','SA',NULL,138.60010700,-34.92272680,134477),(7,'Big cup bubble tea','110','Adelaide','',NULL,'Ade','SA',NULL,138.60371590,-34.92316370,177924),(9,'Flowers and coffee','21','Roper','',NULL,'Ade','SA',NULL,138.60412590,-34.92770950,123382),(10,'Melting moment chocolate shop','21','Adelaide','',NULL,'Ade','SA',NULL,138.60388380,-34.92373980,199342),(11,'Tippy Toe Ballet','124','Upper','Glenalta',NULL,'Ade','SA',NULL,138.63314690,-35.01223120,114415),(12,'My favourite palce','10','Tay','Woodforde',5072,'Ade','SA',2,138.69094700,-34.90208600,136770),(15,'sleepless piano bar','12','Jarvis','Hectorville',5073,'Ade','SA',NULL,138.67201360,-34.89148420,123725),(16,'Funky meat pie','31-33','Fourth','St',5069,'Ade','SA',NULL,138.62360100,-34.90745190,189662),(17,'Belair Primary School','45-83','Main','Belair',5052,'Ade','SA',NULL,138.62381200,-35.00229200,164989),(18,'So sweet ice cream shop','1','Bundey','Magill',5072,'Ade','SA',NULL,138.67500200,-34.90793800,115965),(20,'Adelaide Oval','129','War','North',5006,'Ade','SA',NULL,138.59571030,-34.91531980,127902),(23,'Long\'s place','8','Gulnare','Northgate',5085,'Ade','SA',NULL,138.63230100,-34.86122600,149870),(24,'Gym','12','Rundle','Adelaide',5000,NULL,'SA',NULL,138.60010700,-34.92272680,101544),(25,'24 fitness gym','35','York','Adelaide',5000,NULL,'SA',NULL,138.60713310,-34.92310350,189274),(28,'Adelaide Botanic High School','6','Frome','Adelaide',5000,NULL,'SA',NULL,138.60587700,-34.91690900,122780),(29,'Newstart Gym','34','Angas','Adelaide',5000,NULL,'SA',NULL,138.60229200,-34.92954500,178703);
/*!40000 ALTER TABLE `venue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `PROJECT`
--

USE `PROJECT`;

--
-- Final view structure for view `allHotspots`
--

/*!50001 DROP VIEW IF EXISTS `allHotspots`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=``@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allHotspots` AS select `hotspots`.`id` AS `id`,`venue`.`venue_id` AS `venue_id`,date_format(`hotspots`.`start_date`,'%Y-%m-%d %H:%i:%s') AS `start_date`,`venue`.`name` AS `name`,`venue`.`number_venue` AS `number_venue`,`venue`.`street` AS `street`,`venue`.`suburb` AS `suburb`,`venue`.`postcode` AS `postcode`,`venue`.`city` AS `city`,`venue`.`state` AS `state`,`venue`.`manager_id` AS `manager_id`,`venue`.`longitude` AS `longitude`,`venue`.`latitude` AS `latitude`,`venue`.`code` AS `code`,date_format(`hotspots`.`end_date`,'%Y-%m-%d %H:%i:%s') AS `end_date`,((`hotspots`.`start_date` <= now()) and (`hotspots`.`end_date` >= now())) AS `active` from (`hotspots` join `venue` on((`hotspots`.`venue_id` = `venue`.`venue_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `currentHotspots`
--

/*!50001 DROP VIEW IF EXISTS `currentHotspots`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=``@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `currentHotspots` AS select `hotspots`.`id` AS `id`,`venue`.`venue_id` AS `venue_id`,date_format(`hotspots`.`start_date`,'%Y-%m-%d %H:%i:%s') AS `start_date`,`venue`.`name` AS `name`,`venue`.`number_venue` AS `number_venue`,`venue`.`street` AS `street`,`venue`.`suburb` AS `suburb`,`venue`.`postcode` AS `postcode`,`venue`.`city` AS `city`,`venue`.`state` AS `state`,`venue`.`manager_id` AS `manager_id`,`venue`.`longitude` AS `longitude`,`venue`.`latitude` AS `latitude`,`venue`.`code` AS `code`,`hotspots`.`end_date` AS `end_date` from (`hotspots` join `venue` on((`hotspots`.`venue_id` = `venue`.`venue_id`))) where ((`hotspots`.`start_date` <= now()) and (`hotspots`.`end_date` >= now())) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-14 13:42:32

-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: resumar
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aula`
--

DROP TABLE IF EXISTS `aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aula` (
  `idaula` int NOT NULL AUTO_INCREMENT,
  `numero` int NOT NULL,
  `diaSemana` varchar(45) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `local` varchar(45) DEFAULT NULL,
  `duracao` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `disciplina` int DEFAULT NULL,
  PRIMARY KEY (`idaula`),
  KEY `fk_aula_1_idx` (`disciplina`),
  CONSTRAINT `fk_aula_1` FOREIGN KEY (`disciplina`) REFERENCES `edicaoDisciplina` (`idDisciplina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aula`
--

LOCK TABLES `aula` WRITE;
/*!40000 ALTER TABLE `aula` DISABLE KEYS */;
/*!40000 ALTER TABLE `aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sigla` varchar(12) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `conferegrau` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (3,'LEIT','Engenharia Informática e Telecomunicações','Licenciatura'),
(4,'LEC','Engenharia Civil','Licenciatura'),(5,'BIO','Biologia Marinha','Licenciatura'),
(7,'LEE','Engenharia Electrotécnica','Licenciatura');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disciplina`
--

DROP TABLE IF EXISTS `disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disciplina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(6) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `sinopse` varchar(120) DEFAULT NULL,
  `idcurso` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `codigo_UNIQUE` (`codigo`),
  CONSTRAINT `fk_curso_1` FOREIGN KEY (`idcurso`) REFERENCES `curso` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplina`
--
LOCK TABLES `disciplina` WRITE;
/*!40000 ALTER TABLE `disciplina` DISABLE KEYS */;
INSERT INTO `disciplina` VALUES (1,'INF001','Introdução á Programação',NULL, 3),
(2,'INF002','Algoritmos e Estruturas de Dados',NULL, 3),(3,'MAT001','Análise Matemática I',NULL, 3),
(4,'ETE001','Sistemas Digitais',NULL, 3),
(5,'INF003','introdução à Engenharia Informática e Telecomunicações',NULL, 3),
(6,'MAT002','Análise Matemática II',NULL, 4),
(7,'INF004','Arquitectura de Computadores',NULL, 3),
(8,'CET002','Mecânica e Vibrações',NULL, 3),
(9,'INF304','Engenharia de Software',NULL, 3),
(11,'BIO305','Sistemas Distribuídos',NULL, 3),
(12,'BIO306','Bioestatística',NULL, 5),
(13,'BIO307','Botânica',NULL, 5),
(14,'BIO308','Física Geral',NULL, 5),
(15,'QUI309','Quimica Orgânica',NULL, 5),
(16,'ZOO310','Zoologia',NULL, 5),
(17,'ZOO311','Zoo-Histologia',NULL, 5),
(18,'BIO312','Biologia Molecular',NULL, 5),
(19,'HID313','Hidráulica e Mecânica dos Fluídos',NULL, 4),
(20,'MEC314','Mecânica dos solos',NULL, 4),
(21,'PLA315','Planeamento Regional e Urbano',NULL, 4),
(22,'RES316','Resistência de Materiais',NULL, 7),
(23,'ANA317','Análise de Redes Electricas I',NULL, 7),
(24,'ELE318','Electrónica de Potencia II',NULL, 7),
(26,'ENE320','Energia Renovaveis I',NULL, 7),
(27,'INS321','Instalações Eléctricas I',NULL, 7),
(28,'MAQ322','Maquinas Electricas II',NULL, 7);

/*!40000 ALTER TABLE `disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docente` (
  `idDocente` int NOT NULL AUTO_INCREMENT,
  `sigla` varchar(6) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `nomeCompleto` varchar(80) DEFAULT NULL,
  `ocupacao` varchar(45) DEFAULT NULL,
  `grau` varchar(45) DEFAULT NULL,
  `idUser` int NOT NULL,
  `area` int DEFAULT NULL,
  PRIMARY KEY (`idDocente`),
  UNIQUE KEY `sigla_UNIQUE` (`sigla`),
  KEY `fk_docente_1_idx` (`idUser`),
  KEY `fk_docente_2_idx` (`area`),
  CONSTRAINT `fk_docente_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`iduser`),
  CONSTRAINT `fk_docente_2` FOREIGN KEY (`area`) REFERENCES `grupoDisciplinar` (`idarea`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
INSERT INTO `docente` VALUES (1,'PAS','Paulo Silva','Paulo Alexandre dos Santos Silva','Tempo Inteiro	','Mestre',1,1),
(2,'ERS','Emanuel Ribeiro	','Emanuel dos Santos Ribeiro Silva','Tempo Integral','Mestre',2,1);
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dsd`
--

DROP TABLE IF EXISTS `dsd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dsd` (
  `iddsd` int NOT NULL AUTO_INCREMENT,
  `docente` int NOT NULL,
  `disciplina` int NOT NULL,
  `funcao` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`iddsd`),
  KEY `fk_dsd_1_idx` (`docente`),
  KEY `fk_dsd_2_idx` (`disciplina`),
  CONSTRAINT `fk_dsd_1` FOREIGN KEY (`docente`) REFERENCES `docente` (`idDocente`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_dsd_2` FOREIGN KEY (`disciplina`) REFERENCES `edicaoDisciplina` (`idDisciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dsd`
--

LOCK TABLES `dsd` WRITE;
/*!40000 ALTER TABLE `dsd` DISABLE KEYS */;
INSERT INTO `dsd` VALUES (1,1,1,'Responsável'),(2,2,4,'Responsável');
/*!40000 ALTER TABLE `dsd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `edicaoDisciplina`
--

DROP TABLE IF EXISTS `edicaoDisciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edicaoDisciplina` (
  `idEdicao` int NOT NULL AUTO_INCREMENT,
  `edicao` varchar(45) NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `anoLectivo` varchar(45) NOT NULL,
  `periodo` varchar(45) NOT NULL,
  `idDisciplina` int DEFAULT NULL,
  PRIMARY KEY (`idEdicao`),
  KEY `fk_EdicaoDisciplina_1_idx` (`idDisciplina`),
  CONSTRAINT `fk_EdicaoDisciplina_1` FOREIGN KEY (`idDisciplina`) REFERENCES `disciplina` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edicaoDisciplina`
--

LOCK TABLES `edicaoDisciplina` WRITE;
/*!40000 ALTER TABLE `edicaoDisciplina` DISABLE KEYS */;
INSERT INTO `edicaoDisciplina` VALUES (1,'19/20	','Em andamento','2019/2020','1',1),
(2,'19/20','Em andamento','2019/2020','1',4),
(3,'19/20','Em andamento','2019/2020','1',2),
(4,'19/20','Em andamento','2019/2020','1',3),
(5,'19/20','Em andamento','2019/2020','1',5),
(6,'19/20','Em andamento','2019/2020','1',6),
(7,'19/20','Em andamento','2019/2020','1',7),
(8,'19/20','Em andamento','2019/2020','1',8),
(9,'19/20','Em andamento','2019/2020','1',9),
(11,'19/20','Em andamento','2019/2020','1',11),
(12,'19/20','Em andamento','2019/2020','1',12),
(13,'19/20','Em andamento','2019/2020','1',13),
(14,'19/20','Em andamento','2019/2020','1',14),
(15,'19/20','Em andamento','2019/2020','1',15),
(16,'19/20','Em andamento','2019/2020','1',16),
(17,'19/20','Em andamento','2019/2020','1',17),
(18,'19/20','Em andamento','2019/2020','1',18),
(19,'19/20','Em andamento','2019/2020','1',19),
(20,'19/20','Em andamento','2019/2020','1',20),
(21,'19/20','Em andamento','2019/2020','1',21),
(22,'19/20','Em andamento','2019/2020','1',22),
(23,'19/20','Em andamento','2019/2020','1',23),
(24,'19/20','Em andamento','2019/2020','1',24),
(26,'19/20','Em andamento','2019/2020','1',26),
(27,'19/20','Em andamento','2019/2020','1',27),
(28,'19/20','Em andamento','2019/2020','1',28);
/*!40000 ALTER TABLE `edicaoDisciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudante`
--

DROP TABLE IF EXISTS `estudante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudante` (
  `codigo` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `nomeCompleto` varchar(45) DEFAULT NULL,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_estudante_1_idx` (`idUser`),
  CONSTRAINT `fk_estudante_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudante`
--

LOCK TABLES `estudante` WRITE;
/*!40000 ALTER TABLE `estudante` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupoDisciplinar`
--

DROP TABLE IF EXISTS `grupoDisciplinar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupoDisciplinar` (
  `idarea` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idarea`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupoDisciplinar`
--

LOCK TABLES `grupoDisciplinar` WRITE;
/*!40000 ALTER TABLE `grupoDisciplinar` DISABLE KEYS */;
INSERT INTO `grupoDisciplinar` VALUES (1,'Engenharia Informática');
/*!40000 ALTER TABLE `grupoDisciplinar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planocurso`
--

DROP TABLE IF EXISTS `planocurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planocurso` (
  `idPlano` int NOT NULL AUTO_INCREMENT,
  `idCurso` int NOT NULL,
  `idDisci` int NOT NULL,
  `ano` int NOT NULL,
  `semestre` int NOT NULL,
  `activo` tinyint DEFAULT '1',
  `dataStatus` datetime DEFAULT NULL,
  PRIMARY KEY (`idPlano`),
  KEY `fk_planocurso_2_idx` (`idDisci`),
  KEY `fk_planocurso_1` (`idCurso`),
  CONSTRAINT `fk_planocurso_1` FOREIGN KEY (`idCurso`) REFERENCES `curso` (`id`),
  CONSTRAINT `fk_planocurso_2` FOREIGN KEY (`idDisci`) REFERENCES `disciplina` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planocurso`
--

LOCK TABLES `planocurso` WRITE;
/*!40000 ALTER TABLE `planocurso` DISABLE KEYS */;
INSERT INTO `planocurso` VALUES (2,3,1,1,1,1,NULL);
/*!40000 ALTER TABLE `planocurso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sumario`
--

DROP TABLE IF EXISTS `sumario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sumario` (
  `idsumario` int NOT NULL AUTO_INCREMENT,
  `conteudo` varchar(120) NOT NULL,
  `biblio` varchar(45) DEFAULT NULL,
  `presenca` int DEFAULT NULL,
  `aula` int DEFAULT NULL,
  PRIMARY KEY (`idsumario`),
  KEY `fk_sumario_1_idx` (`aula`),
  CONSTRAINT `fk_sumario_1` FOREIGN KEY (`aula`) REFERENCES `aula` (`idaula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sumario`
--

LOCK TABLES `sumario` WRITE;
/*!40000 ALTER TABLE `sumario` DISABLE KEYS */;
/*!40000 ALTER TABLE `sumario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `role` (name) VALUES ('Docente');
INSERT INTO `role` (name) VALUES ('Estudantes');
INSERT INTO `role` (name) VALUES ('Funcionario');
-- ,('Estudante'),('Funcionario')

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `idrole` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  CONSTRAINT FOREIGN KEY (`idrole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (idUser, idrole, name, email, password )VALUES (1, 3,'paulosilva	','psilva@uta.cv','Lala123');
INSERT INTO `user` (idUser, idrole, name, email, password )VALUES  (2,3,'emanuel','eribeiro','lala123');
INSERT INTO `user` (idUser, idrole, name, email, password ) VALUES(3, 4,'Roberto Medina','rmedina@uta.cv','1234');
INSERT INTO `user` (idUser, idrole, name, email, password )VALUES  (4, 4,'Rafael Pires','rpires@uta.cv','1234eu');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

CREATE VIEW `aula_sumario_table` AS
SELECT   sumario.conteudo, sumario.biblio, sumario.presenca,
aula.diaSemana, aula.hora, aula.local,aula.duracao, aula.data,
 disciplina.codigo, disciplina.nome, disciplina.sinopse
from sumario, aula, disciplina
where  sumario.aula = aula.idaula AND disciplina.id = aula.idaula;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-02  1:28:29
-- use psql postgres < schema.sql

DROP DATABASE IF EXISTS descriptions;
CREATE DATABASE descriptions;

\c descriptions;

CREATE TABLE description (
  id INT PRIMARY KEY NOT NULL,
  vendorName VARCHAR(255),
  vendorFirstName VARCHAR(255),
  vendorLocation VARCHAR(255),
  vendorCountry VARCHAR(255),
  vendorPhoto VARCHAR(255),
  vendorResponseTime VARCHAR(255) NOT NULL,
  productId INT
);

CREATE TABLE shopPolicies (
  id INT PRIMARY KEY,
  productId INT REFERENCES description(id),
  returnsAndExchange TEXT,
  shippingPolicies TEXT,
  additionalPolicies TEXT
);

CREATE TABLE faq (
  id INT PRIMARY KEY,
  productId INT REFERENCES description(id),
  question VARCHAR(255),
  answer VARCHAR(255)
);

CREATE TABLE product (
  id INT PRIMARY KEY,
  productId INT REFERENCES description(id),
  productName VARCHAR(255),
  productDescription TEXT
);



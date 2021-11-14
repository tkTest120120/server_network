create database sp1;
use sp1;

CREATE TABLE customer (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL
);

CREATE TABLE product (
    maSP int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    tenSP TEXT NOT NULL,
    donGia TEXT NOT NULL,
    soLuong TEXT NOT NULL,
    moTa TEXT NOT NULL
);

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    tk VARCHAR(1000) NOT NULL UNIQUE,
    mk TEXT NOT NULL
);

CREATE TABLE carts (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    maSP TEXT NOT NULL,
    tenSP TEXT NOT NULL,
    donGia TEXT NOT NULL,
    soLuong TEXT,
    moTa TEXT
);

CREATE TABLE receipts (
    maHD int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    nguoiNhan TEXT NOT NULL,
    phone TEXT NOT NULL,
    diaChi TEXT NOT NULL,
    maSP TEXT NOT NULL,
    tenSP TEXT NOT NULL,
    donGia TEXT NOT NULL,
    soLuong TEXT NOT NULL,
    moTa TEXT NOT NULL,
    tongTien TEXT NOT NULL,
    ngayMua TEXT NOT NULL,
    trangThai TEXT
);
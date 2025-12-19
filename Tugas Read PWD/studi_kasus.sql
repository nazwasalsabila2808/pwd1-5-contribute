CREATE DATABASE studi_kasus;

USE studi_kasus;

CREATE TABLE mahasiswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    nim VARCHAR(20),
    jurusan VARCHAR(50),
    studi_kasus VARCHAR(100)
);

INSERT INTO mahasiswa (nama, nim, jurusan, studi_kasus) VALUES
('Andi', '12345', 'Teknik Informatika', 'Basis Data'),
('Budi', '12346', 'Sistem Informasi', 'Jaringan Komputer');
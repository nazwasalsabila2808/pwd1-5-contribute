<?php
require_once 'Database.php';
require_once 'Mahasiswa.php';

$database = new Database();
$db = $database->getConnection();

$mahasiswa = new Mahasiswa($db);
$stmt = $mahasiswa->getAll();

?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Data Mahasiswa</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        table {
            border-collapse: collapse;
            width: 60%;
            margin: 0 auto;
            background: white;
        }
        th, td {
            border: 1px solid #ddd;
            text-align: center;
            padding: 8px;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:hover {background-color: #f1f1f1;}
        h2 {
            text-align: center;
            color: #333;
        }
    </style>
</head>
<body>

<h2>Data Mahasiswa Studi Kasus Berbeda</h2>

<table>
    <tr>
        <th>Nama</th>
        <th>NIM</th>
        <th>Jurusan</th>
        <th>Studi Kasus</th>
    </tr>

    <?php while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) : ?>
    <tr>
        <td><?php echo htmlspecialchars($row['nama']); ?></td>
        <td><?php echo htmlspecialchars($row['nim']); ?></td>
        <td><?php echo htmlspecialchars($row['jurusan']); ?></td>
        <td><?php echo htmlspecialchars($row['studi_kasus']); ?></td>
    </tr>
    <?php endwhile; ?>
</table>

</body>
</html>
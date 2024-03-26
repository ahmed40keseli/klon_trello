// const Sequelize = require('sequelize');

// CREATE TABLE lists (
//     list_id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     board_id INT NOT NULL,
//     position INT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     FOREIGN KEY (board_id) REFERENCES boards(board_id)
// );
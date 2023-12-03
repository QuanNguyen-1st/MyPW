INSERT INTO ACCOUNT (accountName, accountPassword, isAdmin)
VALUES 
    ('user1', 'password123', '1'),
    ('user2', 'securePass567', '0'),
    ('user3', 'qwerty789', '0');

INSERT INTO PASSLIST (accountName, webName, password)
VALUES 
    ('user1', 'example.com', 'webpass123'),
    ('user2', 'socialmedia.org', 'securePass789'),
    ('user3', 'shopping-site.com', 'shoppingPass456');

INSERT INTO INFO (accountName, fullName, email, phone, lastLoginTime)
VALUES 
    ('user1', 'John Doe', 'john.doe@email.com', '555-1234', '2023-12-01 08:30:00'),
    ('user2', 'Jane Smith', 'jane.smith@email.com', '555-5678', '2023-12-02 12:45:00'),
    ('user3', 'Bob Johnson', 'bob.johnson@email.com', '555-9876', '2023-11-30 18:15:00');
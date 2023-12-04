USE mypw

CREATE TABLE ACCOUNT (
    accountName VARCHAR(255) PRIMARY KEY NOT NULL,
    accountPassword VARCHAR(255) NOT NULL,
    isAdmin BIT NOT NULL
);


CREATE TABLE PASSLIST (
    accountName VARCHAR(255) PRIMARY KEY FOREIGN KEY REFERENCES ACCOUNT(accountName),
    webName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE INFO (
	accountName VARCHAR(255) PRIMARY KEY FOREIGN KEY REFERENCES ACCOUNT(accountName),
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    lastLoginTime DATETIME
);
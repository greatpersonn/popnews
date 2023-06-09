CREATE DATABASE Popnews;

CREATE TABLE Posts(
    PostId SERIAL PRIMARY KEY,
    PostHeader VARCHAR(128) NOT NULL, 
    PostContent VARCHAR(128) NOT NULL,
    PostAuthor VARCHAR(128) NOT NULL,
    PostDate VARCHAR(32) NOT NULL
);

CREATE TABLE Files(
    FileId SERIAL PRIMARY KEY,
    NameOfFile VARCHAR(256) NOT NULL, 
    TypeOfFile VARCHAR(64) NOT NULL
);
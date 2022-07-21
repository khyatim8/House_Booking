create database RealEstateDb;

 use RealEstateDb;

create table TblLogin(Id int primary key identity(1,1),
                       UserName varchar(200) unique not null,
					   Email varchar(200) unique,
					   Password varchar(100) not null,
					   MObileNumber int,
					   isAdmin int,
					   isVender int,);

select *from TblLogin;

insert into TblLogin values('admin1','admin1@gmail.com','123',978584239,1,0);

create table TblProperty(Id int primary key identity(1,1),
                       PropertyName varchar(200)  not null,
					   PropertyDescription varchar(500),
					   PropertyImage varchar(100) not null,
					   PropertySize varchar(100) not null,
					   Propertylocation varchar(200)  not null,
					   PropertyPrice int,
					   Discount int);
select *from TblProperty;

create table TblVenderProperty(Id int primary key identity(1,1),
                       UserName varchar(200) unique not null,
					   Email varchar(200) unique,
                       PropertyName varchar(200)  not null,
					   PropertyDescription varchar(500),
					   PropertyImage varchar(100) not null,
					   PropertySize varchar(100) not null,
					   Propertylocation varchar(200)  not null,
					   PropertyPrice int,
					   Discount int);
select *from TblVenderProperty;

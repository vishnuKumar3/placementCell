'''for user credentials'''
create table signup(
	username varchar(50) primary key,
	password varchar(100)
)
'''for admin credentials'''
create table admin(
	username varchar(50) primary key,
	password varchar(100)
)
'''company details in brief'''
create table companies(
    id int(5) primary key AUTO_INCREMENT,
    name varchar(50),
    selected int(5),
    registered int(5)
)
'''for profile'''
create table profile(
    id varchar(7) primary key,
    firstName varchar(30),
    lastName varchar(20),
    mobile int(10),
    birthDate date,
    address varchar(200),
    marks10 varchar(4),
    marks12 varchar(4),
    marksBtech varchar(4)
)
'''for company details'''
create table company(
    id int(5) primary key AUTO_INCREMENT,
    name varchar(30),
    salary varchar(10),
    intern varchar(6),
    ppo varchar(6),
    description varchar(500),
    logo varchar(40),
    mainBranch varchar(40),
    fulldetails varchar(50),
    startDate Date,
    endDate Date
)

'''for to store the data of student registration to a company'''
create table studentAndcompany(
	studentId varchar(7),
	companyId varchar(50),
	foreign key(studentId) references profile(studentId)
)

'''for adding hiring updates for each round for a company'''
create table companyUpdate(
	id int(5),
	heading varchar(100),
	data varchar(50),
	foreign key(id) references company(id)
)	



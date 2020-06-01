show databases;

use hcodelab;

show tables;

ALTER USER 'hcodelab'@'localhost'
IDENTIFIED WITH mysql_native_password BY 'hcodelab';

ALTER USER 'hcodelab'@'%'
IDENTIFIED WITH mysql_native_password BY 'hcodelab';


select * from adonis_schema;
select * from tokens;
select * from users;

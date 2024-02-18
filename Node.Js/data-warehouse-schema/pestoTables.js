
/*

    CREATE SCHEMA `datawarehouse`;


    CREATE TABLE cities(
    id int NOT NULL Primary Key AUTO_INCREMENT,
    city varchar(100),
    state varchar(100),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    Insert into cities (city, state) values('Pune', 'Maharashtra');
    Insert into cities (city, state) values('Mumbai', 'Maharashtra');
    Insert into cities (city, state) values('Delhi', 'Delhi');
    Insert into cities (city, state) values('Bangalore', 'Karnataka');
    Insert into cities (city, state) values('Chennai', 'Tamilnadu');


    CREATE TABLE warehouses(
    id int NOT NULL Primary Key AUTO_INCREMENT,
    wh_name varchar(150),
    location varchar(100),
    city int,
    extra_content JSON,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (city) REFERENCES cities(city)
    );
    
    Insert into warehouses(wh_name, city, extra_content) values('Warehouse A', 'Pune', {"capacity": 1000});
    Insert into warehouses(wh_name, city, extra_content) values('Warehouse B', 'Mumbai', {"capacity": 800});
    Insert into warehouses(wh_name, city, extra_content) values('Warehouse C', 'Delhi', {"capacity": 1200});
    Insert into warehouses(wh_name, city, extra_content) values('Warehouse D', 'Bangalore', {"capacity": 900});
    
    CREATE TABLE stores(
    id int NOT NULL Primary Key AUTO_INCREMENT,
    s_name varchar(150),
    location varchar(100),
    city_id int,
    wh_id int,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (city_id) REFERENCES cities(id),
    FOREIGN KEY (wh_id) REFERENCES warehouses(id)
    );
    
    Insert into stores(s_name, location, city_id, wh_id) values('Store 1', 'Telangana', 1, 1);
    Insert into stores(s_name, location, city_id, wh_id) values('Store 2', 'Telangana', 2, 2);

    CREATE TABLE customers(
    cno int NOT NULL Primary Key AUTO_INCREMENT,
    cname varchar(150),
    addr varchar(100),
    city_id int,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (city_id) REFERENCES cities(id)
    );

    Insert into customers(cname, addr, city_id) values('CUS 1', 'Telangana', 1);
    Insert into customers(cname, addr, city_id) values('CUS 2', 'Telangana', 2);
    select * from customers;
    
    CREATE TABLE orders(
    ono int NOT NULL Primary Key AUTO_INCREMENT,
    cno int,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cno) REFERENCES customers(cno)
    );

    Insert into orders(cno) values(1);
    Insert into orders(cno) values(2);
    select * from orders;
    
    CREATE TABLE items(
    id int NOT NULL Primary Key AUTO_INCREMENT,
    description text,
    weight DECIMAL(5,2), 
    cost DECIMAL(5,2),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    Insert into items(description, weight, cost) values('sample description 1', '5.5', '15.50');
    Insert into items(description, weight, cost) values('sample description 2', '3.5', '20.70');
    Insert into items(description, weight, cost) values('sample description 3', '7.5', '10.30');
    select * from items;
    
    CREATE TABLE order_items(
    id int NOT NULL AUTO_INCREMENT,
    ono int,
    item_id int,
    quantity int,
    PRIMARY KEY(id),
    FOREIGN KEY(ono) REFERENCES orders(ono),
    FOREIGN KEY(item_id) REFERENCES items(id)
    );

    INSERT INTO order_items(ono, item_id, quantity) values(1, 2, 2);
    INSERT INTO order_items(ono, item_id, quantity) values(1, 1, 1);
    INSERT INTO order_items(ono, item_id, quantity) values(2, 1, 3);
    INSERT INTO order_items(ono, item_id, quantity) values(2, 2, 1);
    select * from order_items;
    
    CREATE TABLE store_items(
    id int NOT NULL AUTO_INCREMENT,
    store_id int,
    item_id int,
    quantity int,
    PRIMARY KEY(id),
    FOREIGN KEY(store_id) REFERENCES stores(id),
    FOREIGN KEY(item_id) REFERENCES items(id)
    );
    
    INSERT INTO store_items(store_id, item_id, quantity) values(1, 1, 20);
    INSERT INTO store_items(store_id, item_id, quantity) values(1, 2, 10);
    INSERT INTO store_items(store_id, item_id, quantity) values(2, 1, 30);
    INSERT INTO store_items(store_id, item_id, quantity) values(2, 2, 10);
    select * from store_items;
    
    */
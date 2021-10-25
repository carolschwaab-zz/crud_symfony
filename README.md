# Flexy Desafio

A Product CRUD is an web interface to manage the Create, Read, Updated and Delete of products.

 ### Tech

- PHP 7+
- Use Symfony Framework 3+
- Doctrine ORM
- Docker
- Twig
- Bootstrap CSS Framework
- Responsive layout
- Git
- MySQL

### Installation

In the terminal access the project directory.

```sh
$ cd flexy
$ docker-compose up -d
```

In the new terminal access the project directory.

```sh
$ cd flexy docker-compose ps 
$ docker container exec -it flexy-php-fpm bash
$ composer install
$./bin/console doctrine:database:create
$ ./bin/console doctrine:schema:update --force
```

#### Access 

Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://localhost
```
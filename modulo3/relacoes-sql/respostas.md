# EXERCÍCIO 1

### A. 
Chave estrangeira ou Foreign Key (FK) é a chave que permite a referência a registros oriundos de outras tabelas no nosso banco de dados.

### B.
~~~sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Maravilhoso!",
    9,
		"001"
);
~~~

### C.

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`franklin-maiara-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

No caso, eu criei uma Query para adicionar uma avaliação a um filme cujo id não existe no banco de dados. E como não foi possível estabelecer uma relação com esse dado na tabela de filmes a partir da chave estrangeira, não houve modificações.

~~~sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Maravilhoso!",
    9,
		"002"
);
~~~

### D.

ALTER TABLE Filmes DROP COLUMN rating;

# EXERCÍCIO 2

### A.

A tabela abaixo representa uma relação do tipo N:M, uma vez que um ator/atriz pode participar de vários filmes, e um filme pode ter vários atores.
~~~sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
~~~

### B.
~~~sql

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
        "001"
)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
        "002"
)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
        "002"
)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
        "003"
)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"005",
        "001"
)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"005",
        "003"
)
~~~

### C. 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
        "003"
)

No meu caso, não há filmes com id 002, e logo, como não é possível estabelecer uma relação a partir da chave estrangeira.

### D.

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

# EXERCÍCIO 3

### A.

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

O operador ON mostra a conexão entre duas tabelas. No caso, estou dizendo que os id's especificados são os mesmos para ambas as tabelas ao usar o 'ON'. E deste modo, o JOIN irá entender que são esses dados que ele deve mesclar, pois são iguais.

### B.
~~~sql
SELECT m.title, m.id as movie_id, r.rate as rating FROM Filmes f 
INNER JOIN Rating r ON f.id = r.movie_id;
~~~




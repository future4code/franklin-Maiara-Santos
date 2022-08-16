# EXERCÍCIO 1

### A.
* CREATE TABLE: Cria uma tabela
* VARCHAR: Declara uma variável string que terá no máx 255 caracteres
* FLOAT: Declara uma variável com número não inteiro
* DATE: Declara data
* PRIMARY KEY: Chave primária da tabela

### B.
* SHOW DATABASES: Mostra a quantidade de bancos de dados presente no seu sistema

* SHOW TABLES> Mostra as tabelas do banco de dados atual

* DESCRIBE Actor: Mostra todos os atributos que tem a tabela Actor (ou seja as labels, e não os valores que ela tem)

# EXERCÍCIO 2

### A.
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  12000000,
  "1963-08-23", 
  "female"
);
~~~~

### B.
Não é possível adicionar dados com o mesmo id, uma vez que, para cada linha de dados, o id é único.

A -------------------------------------
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~~

B ---------------------------------------
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  " Mariano Oli",
  400000,
  "1949-04-18", 
  "male"
);
~~~

C ----------------------------------------
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~
D ----------------------------------------
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Bruno Luz",
  400000,
  "1949-04-18", 
  "male"
);
~~~
E ----------------------------------------
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~

# EXERCICIO 3 
~~~sql
A --------------------------------------
SELECT id, name, salary, birth_date FROM Actor WHERE gender = "female"

B ---------------------------------------
SELECT salary FROM Actor WHERE name = "Tony Ramos";

C ---------------------------------------
SELECT * FROM Actor WHERE gender = "invalid";

Não aparece nenhum dado (vem os campos como null)

D ----------------------------------------
SELECT id, name, salary FROM Actor WHERE salary < 500000;

E ----------------------------------------
SELECT id, name from Actor WHERE id = "002";
~~~

# EXERCICIO 4
~~~sql
A ----------------------------------------
A Query auxilia a encontrar atores que começam com a letra A ou J e que tenham salários maiores que 300 mil

B ----------------------------------------
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

C ----------------------------------------
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

D -----------------------------------------
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%A%" OR name LIKE "%a%" AND salary >= 350000 AND salary < 900000;
~~~

# EXERCICIO 5
A ----------------------------------------
~~~sql
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
~~~

B,C,D,E -----------------------------------
~~~sql
INSERT INTO Filmes (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
	Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
 	7
),
(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
),
(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém 
no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
);
~~~

# EXERCICIO 6
~~~sql
A ---------------------------------------
SELECT id, avaliacao, titulo FROM Filmes WHERE id="003";

B -----------------------------------------
SELECT * FROM Filmes WHERE titulo="Deus é Brasileiro";

C -----------------------------------------
SELECT id, titulo, sinopse FROM Filmes WHERE avaliacao >=7;
~~~

# EXERCICIO 7
~~~sql
A ---------------------------------------
SELECT * FROM Filmes WHERE titulo LIKE "%vida%";

B ---------------------------------------
SELECT * FROM Filmes
WHERE titulo LIKE "%férias%" OR  sinopse LIKE "%férias%";

C -----------------------------------
SELECT * FROM Filmes
WHERE data_de_lancamento < "2022-08-16" ;

D -------------------------------------
SELECT * FROM Filmes 
WHERE data_de_lancamento < "2022-08-16"
AND (nome LIKE "%resolve%" OR  sinopse LIKE "%resolve%")
AND avaliacao > 7;
~~~
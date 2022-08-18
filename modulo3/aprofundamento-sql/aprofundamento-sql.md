# EXERCÍCIO 1

### A.
Deleta uma coluna específica, no caso, a de salário
~~~sql
ALTER TABLE Actor DROP COLUMN salary
~~~

### B.
Altera um dos rótulos da tabela e permite que sejam inseridas strings de até 6 caracteres  (nome + tipo de dado)
~~~sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~
### C.
Altera o tipo de dado que terá uma determinada coluna, sem alterar o nome dela. No caso, irá permitir strings de até 255 caracteres
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~

### D.
Altera o tipo de dado que terá uma coluna, e nesse caso, irá permitir strings de até 100 caracteres.
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

# EXERCÍCIO 2

### A.
Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

~~~sql
UPDATE Actor SET name = "Moacyr Franco", birth_date = "1949-04-18" WHERE id = "003"
~~~

### B.
Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
~~~sql
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
~~~

### C.
Escreva uma query que atualize todas as informações do ator com o id 005
~~~sql
UPDATE Actor SET name = "Poliana Flor", birth_date = "2020-02-10", salary = 600000, gender = "male" WHERE id = "005"
~~~

# EXERCÍCIO 3

### A.
~~~sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
~~~

### B.
~~~sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
~~~

# EXERCÍCIO 4

### A.
~~~sql
SELECT MAX(salary) FROM Actor
~~~

### B.
~~~sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
~~~

### C.
~~~sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
~~~

### D.
~~~sql
SELECT SUM(salary) FROM Actor
~~~

# EXERCÍCIO 5

### A.

Essa query conta a quantidade de pessoas por gênero
~~~sql
SELECT COUNT(*), gender FROM Actor GROUP BY gender
~~~

### B.
~~~sql
SELECT id, name FROM Actor ORDER BY name DESC;
~~~

### C.
~~~sql
SELECT * FROM Actor ORDER BY salary;
~~~

### D.
~~~sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
~~~

### E.
~~~sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
~~~

# EXERCÍCIO 6

### A.
~~~sql
ALTER TABLE Filmes ADD playing_limit_date DATE;
~~~

### B.
~~~sql
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
~~~

### C.
Query do filme que já passou
~~~sql
UPDATE Filmes SET playing_limit_date = "2010-04-11" WHERE id = "002";
~~~

Query do filme que está em cartaz
~~~sql
UPDATE Filmes SET playing_limit_date = "2022-08-26" WHERE id = "001";
~~~

### D.
~~~sql
DELETE FROM Filmes WHERE id = "002";
~~~

Atualizando o filme
~~~sql
UPDATE Filmes SET sinopse ="hghj hieswer eswar ohiuh" WHERE id = "002";
~~~

Resultado: Quando deletamos, o programa mostra que 1 linha foi afetada (ou seja, a ação de deletar funcionou e foi aplicada). Porém ao atualizar a sinopse, o programa mostra que funcionou o comando (fica verdinho), porém nada foi atulizado, uma vez que o filme com o id 002 não existe mais na tabela.

Ao usar o comando 
~~~~sql
SELECT * FROM Filmes;
~~~

É possível verificar que o filme não existe mais na base de dados.

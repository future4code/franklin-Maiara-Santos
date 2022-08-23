# EXERCÍCIO 1

### A.
Ao usar Raw, a requisição retorna como resposta os dados brutos (crus) encontrados no banco de dados.

### B.
~~~sql
const findActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result;
  }
   app.get("/actor/:name", async (request: Request, response: Response) => {
      try {
        const name:string = request.params.name
        response.send(await findActor(name))
      } catch(error) {
        console.log(error)
        response.status(500).send("Algo deu errado")
      }
    });
~~~

### C.
~~~sql
const countActorsByName = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};

app.get("/gender-actor/:gender", async (request: Request, response: Response) => {
      try {
        const gender:string = request.params.gender
        response.send(await countActorsByName(gender))
      } catch(error) {
        console.log(error)
        response.status(500).send("Algo deu errado")
      }
    });
~~~

# EXERCÍCIO 2

### A.
~~~sql
const updateInfosActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
~~~

### B.

const deleteActor = async (id: string) : Promise <any> => {
    await connection ("Actor")
    .delete()
    .where ("id", id);
}

### C.

const averageSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

# EXERCÍCIO 3

### A.
~~~sql
app.get("/actor/:id", async (request: Request, response: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~

### B.
~~~sql
app.get("/actor", async (request: Request, response: Response) => {
  try {
    const count = await countActors(request.query.gender as string);
    response.status(200).send({
      quantity: count,
    });
  } catch (err) {
    response.status(400).send({
      "Deu ruim"
    });
  }
});
~~~

### EXERCICIO 4

### A.

~~~sql
app.put("/actor", async (request: Request, response: Response) => {
  try {
    await updateSalary(request.body.id, request.body.salary);
    response.status(200).send({
      "Atualizado com sucesso"
    });
  } catch (err) {
    response.status(400).send({
      "Deu ruim. Tente novamente"
    });
  }
});
~~~

### B
~~~sql
app.delete("/actor/:id", async (request: Request, response: Response) => {
  try {
    await deleteActor(request.params.id);
  } catch (error) {
    response.status(400).send({
      message: error.message,
    });
  }
});
~~~
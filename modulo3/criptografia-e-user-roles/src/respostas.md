# EXERCÍCIO 1

### A.
Salt é uma parte da criptografia de um texto. O salt é composto pelo algoritmo, o cost e uma string aleatória.

Round é a quantidade de costs que terá o seu texto encriptado. Quanto maior o cost, mais o número de rounds para deixar o texto/senha que deseja mais segura.

### B e C.

import * as bcrypt from "bcryptjs";


 const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

 const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }

# EXERCÍCIO 2

### A. O primeiro a ser modificado é o cadastro, pois é a porta de entrada dos dados.


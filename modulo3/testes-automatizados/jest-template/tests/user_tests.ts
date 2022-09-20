import User from './user'
import performPurchase from './user'

describe('Testando function performPurchase', () => {


    test("Saldo igual a compra", () => {
        const user = {
            name: "MariCruz Oliveira", 
            balance: 800
        }
        const result = performPurchase(user, 800)
    
        expect(result).toEqual({
            name: "MariCruz Oliveira",
            balance: 0
        })
    });

    test("Saldo maior que compra", () => {
        const user = {
            name: "Maria", 
            balance: 300
        }
        const result = performPurchase(user, 100)
    
        expect(result).toEqual({
            name: "Maria",
            balance: 200
        })
    });

    test("Saldo menor que compra", () => {
        const user = {
            name: "Matheus", 
            balance: 300
        }
        const result = performPurchase(user, 600)
        
        expect(result).toBe(undefined)
    });
    });
  
  

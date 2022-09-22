import { validateCharacter } from '../src/index'

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1000,
      strength: 200,
      defense: 100,
    });

    expect(result).toBe(false);
  });


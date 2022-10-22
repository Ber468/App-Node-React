import { isNumber } from "../isNumber";

describe("Testes na função isNumber", () => {
  it("Deve retornar undefined quando o valor for um número", () => {
    const value = 10;

    expect(isNumber(value)).toBeUndefined();
  });

  it("Deve retornar uma mensagem de erro quando o valor não for um número", () => {
    const value = "s";

    expect(() => isNumber(value)).toThrowError(
      "Campo informado não é um número"
    );
  });

  it("Deve retornar uma mensagem de erro personalizada quando o valor não for um número", () => {
    const value = "s";
    const name = "valor";

    expect(() => isNumber(value, name)).toThrowError(
      "Campo valor não é um número"
    );
  });
});

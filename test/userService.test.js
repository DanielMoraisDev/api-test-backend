import Usuario from "../src/models/usuarioModel.js";
import create from "../src/controllers/usuarios/functions/create.js"

describe("Testando User service", () => {
  let nome = "dsdadsa";
  let email = "teste@jest.com";
  let senha = "2213133dd";

  beforeAll(async () => {
    await Usuario.sync();
  });

  it("Deve criar um novo usuário", async () => {
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    const newUser = await create(usuario);
    expect(newUser).not.toBeInstanceOf(Error);
  });
});

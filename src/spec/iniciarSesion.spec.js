import {Usuario} from "../models/Usuario";
import { ListaUsuarios } from "../models/ListaUsuarios";
import "jest-localstorage-mock";
describe("Iniciar Sesion", () => {
  it("Se busca al usuario pepe en la lista de usuarios", () => {
    localStorage.clear();
    let listaUsuarios=new ListaUsuarios();
    listaUsuarios.agregarUsuario(new Usuario("pepe","123"))
    expect(listaUsuarios.buscarUsuario("pepe")).toEqual([new Usuario("pepe","123")]);
  });
}
);
 
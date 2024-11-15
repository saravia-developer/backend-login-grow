import { UsersServices } from "./users.services.js";
import jwt from "jsonwebtoken";
import { env } from '../utils/env.js'

export class AuthenticationServices {
  usersServices;

  constructor() {
    this.usersServices = new UsersServices()
  }

  async login(username, password) {
    
    try {
      const userExists = await this.usersServices.findByUsername(username);
      if(!userExists) throw new Error("Usuario incorrecto o no encontrado");
      
      const { id, usuario, Contrasena } = userExists;
      if(password !== Contrasena) throw new Error("Contraseña incorrecta");
      
      const token = jwt.sign({id, usuario}, env.secretKey, { expiresIn: '1h' });

      return token
    } catch (error) {
      throw error
    }
  }
}
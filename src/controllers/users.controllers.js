import { UsersServices } from "../services/users.services.js";

class UsersControllers {
  usersServices;

  constructor() {
    this.usersServices = new UsersServices();
  }

  async findAll(req, res) {
    const { limit, offset } = req.query;
    const { users, totalRecords } = await this.usersServices.findAll({ limit, offset });

    res.json({ success: true, data: users, countRegister: totalRecords });
  }

  async findByUsername(req, res) {
    const { usuario } = req.params;
    const user = await this.usersServices.findByUsername(usuario);

    res.json({ success: true, data: user });
  }

  async findByName(req, res) {
    const { name } = req.params;
    const user = await this.usersServices.findByName(name);

    res.json({ success: true, data: user });
  }

  async create(req, res) {
    const {
      usuario,
      Correo,
      Nombre,
      Apell_paterno,
      Apell_materno,
      Contrasena,
      Tipo_usuario,
    } = req.body;

    const newUser = await this.usersServices.create({
      usuario,
      Correo,
      Nombre,
      Apell_paterno,
      Apell_materno,
      Contrasena,
      Tipo_usuario,
    });

    res.json({ success: true, data: newUser });
  }

  async update(req, res) {
    const { id } = req.params
    const userUpdate = await this.usersServices.update(id, req.body);

    res.json({ sucess: true, message: 'Updated User in System', result: userUpdate });
  }

  async delete(req, res) {
    const { id } = req.params;
    const deleteRegister = await this.usersServices.delete(id);

    res.json({ success: true, message: 'Delete record' })
  }
}

export const usersControllers = new UsersControllers();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UsersServices {
  async findAll({ limit, offset }) {
    let optionsPaginated = {};

    if (limit && offset) {
      optionsPaginated = {
        skip: parseInt(offset),
        take: parseInt(limit),
      };
    }

    const users = await prisma.usuarios.findMany(optionsPaginated);
    const totalRecords = await prisma.usuarios.count();
    await prisma.$disconnect();

    return { users, totalRecords };
  }

  async findByUsername(username) {
    if (!username) throw new Error("Ingresa un usuario válido");
    const user = await prisma.usuarios.findFirst({
      where: { usuario: username },
    });
    console.log(user);
    await prisma.$disconnect();
    return user;
  }

  async findByName(name) {
    const nameComplete = name.split("-");

    const user = await prisma.usuarios.findMany({
      where: {
        Nombre: nameComplete[0],
        Apell_paterno: nameComplete[1],
        Apell_materno: nameComplete[2],
      },
    });
    await prisma.$disconnect();
    return user;
  }

  async create({
    usuario,
    Correo,
    Nombre,
    Apell_paterno,
    Apell_materno,
    Contrasena,
    Tipo_usuario,
  }) {
    const now = new Date().toISOString().substring(0, 19) + "Z";

    const newUser = await prisma.usuarios.create({
      data: {
        usuario,
        Correo,
        Nombre,
        Apell_paterno,
        Apell_materno,
        Contrasena,
        Tipo_usuario,
        Created_At: now,
      },
    });

    await prisma.$disconnect();

    return newUser;
  }

  async update(id, body) {
    id = parseInt(id);

    const { usuario, Correo, Nombre, Apell_paterno, Apell_materno } = body;
    
    const update = await prisma.usuarios.updateMany({
      where: { id },
      data: { usuario, Correo, Nombre, Apell_paterno, Apell_materno },
    });

    await prisma.$disconnect();
    return update;
  }

  async delete(id) {
    id = parseInt(id);
    const deleteRegister = await prisma.usuarios.delete({ where: { id } });

    await prisma.$disconnect();
    return deleteRegister;
  }
}

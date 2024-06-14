import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all();
    return user;
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(["name", "email", "password"]);
    const user = await User.create({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    console.log(user.$isPersisted); // true
    return user;
  }

  public async show({}: HttpContextContract) {
    return "show";
  }

  public async update({}: HttpContextContract) {
    return "update";
  }

  public async destroy({}: HttpContextContract) {
    return "delete";
  }
}

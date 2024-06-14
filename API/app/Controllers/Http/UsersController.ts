import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    const user = await User.all();
    return user;
  }

  public async store({}: HttpContextContract) {
    return "store";
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

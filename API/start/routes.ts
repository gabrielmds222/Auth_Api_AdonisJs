import Route from "@ioc:Adonis/Core/Route";

Route.get("/hello", async () => {});

Route.resource("users", "UsersController");

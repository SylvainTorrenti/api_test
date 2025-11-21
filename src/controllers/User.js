const app = require("../../app");
const user = require("../helpers/User");

class UserController {
  async setUser(req) {
    console.log("Inside set user controllerrrrrrrrrrrrrrrrr method");
    // const nom = req.params.nom;
    // const prenom = req.params.prenom;
    const { nom, prenom } = req.params;
    const response = await user.setUser({ nom, prenom });
    return response;
  }

  async getUser() {
    console.log("Inside get user controllerrrrrrrrrrrrrrr method");
    const response = await user.getUser();
    return response;
  }

  async getUserById(req) {
    console.log("Inside get user by id controllerrrrrrrrrrrrrrr method");
    const { id } = req.params;
    const response = await user.getUserById(id);
    return response;
  }

  async changeUser(req) {
    console.log("Inside change User controllerrrrrrrrrrrrrrrr method");
    const { nom, prenom } = req.params;
    const response = await user.changeUser({ nom, prenom });
    return response;
  }

  async changeUserById(req) {
    console.log("Inside change User by id controllerrrrrrrrrrrrrrrr method");
    const { id, nom, prenom } = req.params;
    const response = await user.changeUserById(id, { nom, prenom });
    return response;
  }

  async deleteUser() {
    console.log("Inside delete User controllerrrrrrrrrrrrrrrr method");
    const response = await user.deleteUser();
    return response;
  }
}
module.exports = app.Action.newClass(UserController);

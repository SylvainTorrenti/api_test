const app = require("../../app");
const storage = require("../helpers/Storage");

class StorageController {
  async setStorage(req) {
    console.log("Inside set storage controllerrrrrrrrrrrrrrrrr method");
    // const nom = req.params.nom;
    // const prenom = req.params.prenom;
    const { nom, prenom } = req.params;
    const response = await storage.setStorage({ nom, prenom });
    return response;
  }

  async getStorage() {
    console.log("Inside get storage controllerrrrrrrrrrrrrrr method");
    const response = await storage.getStorage();
    return response;
  }

  async getStorageById(req) {
    console.log("Inside get storage by id controllerrrrrrrrrrrrrrr method");
    const { id } = req.params;
    const response = await storage.getStorageById(id);
    return response;
  }

  async changeStorage(req) {
    console.log("Inside change Storage controllerrrrrrrrrrrrrrrr method");
    const { nom, prenom } = req.params;
    const response = await storage.changeStorage({ nom, prenom });
    return response;
  }

  async changeStorageById(req) {
    console.log("Inside change Storage by id controllerrrrrrrrrrrrrrrr method");
    const { id, nom, prenom } = req.params;
    const response = await storage.changeStorageById(id, { nom, prenom });
    return response;
  }

  async deleteStorage() {
    console.log("Inside delete Storage controllerrrrrrrrrrrrrrrr method");
    const response = await storage.deleteStorage();
    return response;
  }
}
module.exports = app.Action.newClass(StorageController);

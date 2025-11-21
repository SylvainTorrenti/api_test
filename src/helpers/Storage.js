const fs = require("fs");
const path = require("path");
// const { get, set, forEach, result } = require("lodash");
// const { json } = require("stream/consumers");
// const { time } = require("console");
// const { type } = require("os");
const filePath = path.join(__dirname, "storage.json");
const copyFilePath = path.join(__dirname, "storage_backup.json");

/**
 * Function to set storage data in a local JSON file
 * @param {*} new_data the data to store
 * @returns
 */
async function setStorage(new_data) {
  console.log("-------------------");
  console.log("new_data", new_data);
  console.log("-------------------");
  // check if new_data is provided
  if (!new_data) {
    throw new Error("Aucune donnée fournie pour le stockage");
  }
  if (typeof new_data.nom !== "string" || typeof new_data.prenom !== "string") {
    throw new Error(
      "Les champs nom et prenom doivent être des chaînes de caractères"
    );
  }
  const { nom, prenom } = new_data;
  // prepare data for insertion
  id = Date.now();
  console.log("-------------------");
  console.log("timeStamp", id);
  console.log("-------------------");
  let create_data = {
    id,
    nom,
    prenom,
  };

  // check if storage.json file exists
  if (fs.existsSync(filePath)) {
    //create a backup
    fs.copyFileSync(filePath, copyFilePath);
    let existingFiles = await getStorage();
    if (existingFiles.message == "Le fichier est vide") {
      let prepJsonArray = [];
      prepJsonArray.push(create_data);
      // if file does not exist, create it and write data
      await fs.promises.writeFile(filePath, JSON.stringify(prepJsonArray), {
        encoding: "utf8",
      });
    } else {
      existingFiles = await getStorage();
      console.log("existingFiles", existingFiles);
      existingFiles.push(create_data);
      // if file exists, overwrite it with new data after backing up
      fs.writeFileSync(filePath, JSON.stringify(existingFiles), {
        encoding: "utf8",
      });
    }
  } else {
    let prepJsonArray = [];
    prepJsonArray.push(create_data);
    // if file does not exist, create it and write data
    await fs.promises.writeFile(filePath, JSON.stringify(prepJsonArray), {
      encoding: "utf8",
    });
  }
  return `Les données avec l'id ${id}, le nom ${create_data.nom} et le prenom ${create_data.prenom} ont été stockées avec succès`;
}

/**
 * function to get storage data from local JSON file
 * @returns
 */
async function getStorage() {
  if (!filePath) {
    return { message: "Le fichier de stockage n'existe pas" };
  }
  const data = fs.readFileSync(filePath, (err, tt) => {
    if (err) {
      throw err;
    }
  });
  try {
    JSON.parse(data);
  } catch (error) {
    return { message: "Le fichier est vide" };
  }
  return JSON.parse(data);
}

/**
 * function to get storage data by id from local JSON file
 * @param {*} id the id of the record to retrieve
 * @returns
 */
async function getStorageById(id) {
  if (!filePath) {
    throw new Error("Le fichier de stockage n'existe pas");
  }
  const records = await getStorage();
  if (records.message == "Le fichier est vide") {
    throw new Error("Le fichier est vide");
  }
  const found = records.find((entry) => entry.id == parseInt(id));
  if (!found) {
    throw new Error(`Aucun enregistrement trouvé pour l'id ${id}`);
  }
  return found;
}

/**
 * function to change storage data in local JSON file
 * @param {*} new_data the new data to update in storage
 * @returns
 */
async function changeStorage(new_data) {
  if (!filePath) {
    throw new Error("Le fichier de stockage n'existe pas");
  }
  let dataStored = await getStorage();
  if (dataStored.message == "Le fichier est vide") {
    throw new Error("Le fichier est vide");
  }
  const { nom, prenom } = new_data;
  timeStamp = new Date().toISOString();
  if (new_data.nom == dataStored.nom && new_data.prenom == dataStored.prenom) {
    throw new Error(
      "Les données fournies sont identiques aux données existantes"
    );
  }
  // prepare data for insertion
  let create_data = {
    timeStamp,
    nom,
    prenom,
  };
  dataStored = create_data;
  await fs.promises.writeFile(filePath, JSON.stringify(dataStored), {
    encoding: "utf8",
  });
  return "Données modifiées avec succèsss";
}

async function changeStorageById(id, new_data) {
  let fullData = await getStorage();
  let dataToChange = await getStorageById(id);
  fullData = Array.from(fullData).filter(
    (entry) => !(entry.id == parseInt(id))
  );
  if (
    new_data.nom == dataToChange.nom &&
    new_data.prenom == dataToChange.prenom
  ) {
    throw new Error(
      "Les données fournies sont identiques aux données existantes"
    );
  }
  if (typeof new_data.nom !== "string" || typeof new_data.prenom !== "string") {
    throw new Error(
      "Les champs nom et prenom doivent être des chaînes de caractères"
    );
  }
  dataToChange.nom = new_data.nom;
  dataToChange.prenom = new_data.prenom;
  console.log("dataToChange", dataToChange);

  fullData.push(dataToChange);

  fs.writeFileSync(filePath, JSON.stringify(fullData), {
    encoding: "utf8",
  });
  return `Données avec l'id ${id} modifiées avec succès avec le nom ${dataToChange.nom} et le prenom ${dataToChange.prenom}`;
}

/**
 * function to delete storage data from local JSON file
 * @returns
 */
async function deleteStorage() {
  let prepJsonArray = [];
  if (!filePath) {
    throw new Error("Le fichier de stockage n'existe pas");
  }
  const response = await getStorage();
  if (response.message == "Le fichier est vide") {
    throw new Error("Le fichier est déjà vide");
  }
  fs.copyFileSync(filePath, copyFilePath);
  fs.truncateSync(filePath);

  await fs.promises.writeFile(filePath, JSON.stringify(prepJsonArray), {
    encoding: "utf8",
  });
  return { message: "Fichier vidé avec succes" };
}

module.exports = {
  setStorage,
  getStorage,
  deleteStorage,
  changeStorage,
  getStorageById,
  changeStorageById,
};

import executeQuery from "../../database";

export async function newBoutique(data) {
  const { nom, categorieId, image, actif } = data;

  if (nom == "" || categorieId == "" || image == "" || actif == "")
    return { message: "Tous les champs sont obligatoires", success: false };

  try {
    await executeQuery({
      query:
        "INSERT INTO boutique (nom, categorieId, image, actif) VALUES(?, ?, ?, ?)",
      values: [nom, categorieId, image, actif],
    });
    return { message: "Ajout boutique avec  succèss", success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

export async function updateBoutique(data, id) {
  const { nom, categorieId, image, actif } = data;

  if (nom == "" || categorieId == "" || image == "" || actif == "")
    return { message: "Tous les champs sont obligatoires", success: false };

  try {
    await executeQuery({
      query:
        "UPDATE boutique SET  nom=?, categorieId=?, image=?, actif=? WHERE id= ?",
      values: [nom, categorieId, image, actif, id],
    });
    return { message: "Modification boutique avec  succèss", success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

export async function deleteBoutique(id) {
  try {
    await executeQuery({
      query: "DELETE FROM boutique WHERE id= ?",
      values: [id],
    });
    return { message: "Suppression boutique avec  succèss", success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

export async function allCategorie() {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM boutiqueCategorie",
    });
    return { result, success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

export async function allMontants() {
  try {
    const result = await executeQuery({
      query:
        "SELECT * FROM boutique INNER JOIN boutiqueMontant ON boutique.id = boutiqueMontant.boutiqueId",
    });
    return { result, success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

export async function newCategorie(data) {
  const { nom } = data;

  if (nom == "")
    return { message: "Tous les champs sont obligatoires", success: false };

  try {
    await executeQuery({
      query: "INSERT INTO boutiqueCategorie (nom) VALUES(?)",
      values: [nom],
    });
    return { message: "Ajout categorie boutique avec  succèss", success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

export async function newMontant(data) {
  const { boutiqueId, montant } = data;

  if (boutiqueId == "" || montant == "")
    return { message: "Tous les champs sont obligatoires", success: false };

  try {
    await executeQuery({
      query: "INSERT INTO boutiqueMontant (boutiqueId, montant) VALUES(?,?)",
      values: [boutiqueId, montant],
    });
    return { message: "Ajout montant boutique avec  succèss", success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

export async function deleteMontant(id) {
  try {
    await executeQuery({
      query: "DELETE FROM boutiqueMontant WHERE id= ?",
      values: [id],
    });
    return { message: "Suppression montant avec  succèss", success: true };
  } catch (error) {
    return { message: "Erreur", success: false, error };
  }
}

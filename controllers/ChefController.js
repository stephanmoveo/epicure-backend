const chefHandler = require("../handlers/ChefHandler");

exports.createChef = async (req, res) => {
  const data = req.body;
  try {
    await chefHandler.createChefHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "Must Fill All Fields" });
  }
};

exports.findChef = async (req, res) => {
  const data = req.params;
  try {
    const response = await chefHandler.findChefHandler(data);
    res.json(response);
  } catch (err) {
    res.json({ error: "id not found" });
  }
};

exports.updateChef = async (req, res) => {
  const data = req.body;
  try {
    await chefHandler.updateChefHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "id not found" });
  }
};

exports.deleteChef = async (req, res) => {
  const data = req.params;
  try {
    await chefHandler.deleteChefHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "id not found" });
  }
};

exports.allChefs = async (req, res) => {
  try {
    const response = await chefHandler.allChefs();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

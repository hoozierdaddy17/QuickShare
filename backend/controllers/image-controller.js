import File from "../models/file.js";

export const uploadImage = async (req, res) => {
  // create obj for what we will upload
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    res.status(200).json({ path: `http://localhost:3000/file/${file._id}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  console.log(req);
};

export const getImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    file.downloadCount++;
    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    res.send(500).json({ error: error.message });
  }
};

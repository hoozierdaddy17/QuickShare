// multer is middleware used for uploading files
import multer from "multer";

const upload = multer({ dest: "uploads" });

export default upload;

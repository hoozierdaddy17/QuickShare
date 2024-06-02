// react hooks
import { useState, useEffect, useRef } from "react";
import { uploadFile } from "./service/api";
import "./App.css";

function App() {
  // React hooks to map functionality
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [output, setOutput] = useState("");

  // whenever we do some changes it will re - render
  // allows us to perform side effects in a functional component like data fetching
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setOutput(response.path);
      }
    };
    getImage();
  }, [file]);
  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {" "}
      {/*react fragment*/}
      <div className="main-wrapper">
        <div className="container">
          <div className="wrapper">
            <h1>QuickShare: File Sharing App</h1>
            <p>
              Upload your files and easily share the download link with friends!
            </p>
            <button onClick={() => onUploadClick()}>Upload</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <a href={output}>{output}</a>
            {/* use react hooks to give the functionality of choose file to upload button */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [baseImage, setBaseImage] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  return (
    <div className="App">
      <input type="text" />
      <input type="file" onChange={uploadImage} />

      <div className="avatar">
        <img style={{ width: 250 }} src={baseImage} alt="avatar" />
      </div>
    </div>
  );
}

export default App;

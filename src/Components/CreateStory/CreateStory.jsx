import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";

const CreateStory = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [storyText, setStoryText] = useState("");

  const onDrop = (acceptedFiles) => {
    setSelectedImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const uploadStory = () => {
    // Here you can implement the logic to upload the story, including the image and text.
    // You might want to use APIs, Firebase, or other storage solutions for this.
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <div
          {...getRootProps()}
          className={classNames(
            "border-2 border-dashed border-gray-400 p-6 mb-4",
            {
              "bg-gray-200": isDragActive,
            }
          )}
        >
          <input {...getInputProps()} />
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="w-full h-32 object-contain mb-2"
            />
          ) : (
            <p className="text-gray-500">Drag 'n' drop an image here, or click to select one</p>
          )}
        </div>
        <textarea
          className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
          placeholder="Add your story text..."
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
        />
        <button
          onClick={uploadStory}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Story
        </button>
      </div>
    </div>
  );
};

export default CreateStory;

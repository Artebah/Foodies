"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./ImagePicker.module.css";

interface Props {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: Props) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    const imageInput = imageInputRef.current;

    if (imageInput) {
      imageInput.click();
    }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files) return;

    const file = files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export { ImagePicker };

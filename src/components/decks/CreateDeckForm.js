import React, { useState } from "react";
import AxiosWithAuth from "../../utils/axiosWithAuth";
import { CirclePicker } from "react-color";

const CreateDeckForm = () => {
  const [title, setTitle] = useState();
  const [color, setColor] = useState("#fff");

  const colors = ["#61F1D2", "#FF50CE", "#009DF6", "#FFD037", "#FF2323", "#0047D9"];

  function handleSubmit(e) {
    e.preventDefault();
     
     AxiosWithAuth()
     .post(`/api/decks`, )
     .then(res => {
      console.log("title was successfully created")})
     .catch(err => {
     console.log("there was an error.")})
  }

  return (
    <div style={{ backgroundColor: `${colors}` }}>
      <form onSubmit={handleSubmit}>
        CreateDeckForm
        <h3>Title</h3>
        <input placeholder="What are you studying?" onChange={(e) => setTitle(e.target.value)} />
        <h3>Photo</h3>
        <p>X</p>
        <h3>or choose a color</h3>
        <CirclePicker colors={colors} onChangeComplete={(handleChange) => setColor(handleChange)} />
      </form>
    </div>
  );
};

export default CreateDeckForm;

import React, { useState } from "react";
import AxiosWithAuth from "../../utils/axiosWithAuth";
import { CirclePicker } from "react-color";

const CreateDeckForm = () => {
  const [title, setTitle] = useState();
  const [color, setColor] = useState("#fff");

  const colors = ["#61F1D2", "#FF50CE", "#009DF6", "#FFD037", "#FF2323", "#0047D9"];

  async function handleSubmit(e) {
    e.preventDeafult();
    try {
      await AxiosWithAuth().post("", { title });
      console.log("title was successfully created");
    } catch (e) {
      console.log("there was an error bro.");
    }
  }

  //   handleChange(colors, e){
  //    backgroundColor:
  //   }

  return (
    <div style={{ backgroundColor: `${colors}` }}>
      <form action="" onSubmit={handleSubmit}>
        CreateDeckForm
        <h3>Title</h3>
        <input placeholder="What are you studying?" onChange={(e) => setTitle(e.target.value)} />
        <h3>Photo</h3>
        <p>X</p>
        <h3>or choose a color</h3>
        <CirclePicker colors={colors} onChangeComplete={(handleChange) => setColor(handleChange)} />
        <h2>Default backgroundcolor is {color}</h2>
      </form>
    </div>
  );
};

export default CreateDeckForm;

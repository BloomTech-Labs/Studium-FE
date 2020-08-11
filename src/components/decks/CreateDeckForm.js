import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postNewDeck } from "../../redux/actions";
import { CirclePicker } from "react-color";
import NavbarDash from "../navigation/NavBarDash";
import { MainWrapper, FormGroup, Input, NamesWrapper, H3, H2, LabelWrapper, CustomWrapper } from "./styles-decks/CreateDeckFormStyles";
import "./styles-decks/createdeckform.css";
const CreateDeckForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [color, setColor] = useState("#fff");

  const [deckToPost, setDeckToPost] = useState({
    deck_name: "",
    user_id: user.id,
  });

  const handleChange = (e) => {
    setDeckToPost({
      ...deckToPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewDeck(deckToPost));
    setDeckToPost({
      deck_name: "",
      user_id: user.id,
    });
  };

  const colors = ["#61F1D2", "#FF50CE", "#009DF6", "#FFD037", "#FF2323", "#0047D9"];

  //   handleChange(colors, e){
  //    backgroundColor:
  //   }

  return (
    <MainWrapper style={{ backgroundColor: `${colors}` }}>
      <NavbarDash />
      <form onSubmit={handleSubmit} data-testid="form">
        <LabelWrapper>
          <H2>Title</H2>
          <input value={deckToPost.deck_name} name="deck_name" placeholder="What are you studying?" onChange={handleChange} />
        </LabelWrapper>
        <CustomWrapper>
          <NamesWrapper>
            <H3>Photo</H3>
            {/* added fake image as placeholder for upload image feature */}
            <img src={require("../../images/choosephoto.svg")} style={{ width: "100%" }} alt="choose your pic to upload" />
          </NamesWrapper>
          <H3>or choose a color</H3>
          <CirclePicker colors={colors} onChangeComplete={(handleChange) => setColor(handleChange)} />
        </CustomWrapper>
      </form>
    </MainWrapper>
  );
};

export default CreateDeckForm;

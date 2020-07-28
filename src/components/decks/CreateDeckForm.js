import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { postNewDeck } from '../../redux/actions'
import { CirclePicker } from "react-color"

const CreateDeckForm = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [title, setTitle] = useState();
  const [color, setColor] = useState("#fff");

  const [deckToPost, setDeckToPost] = useState({
    deck_name: '',
    user_id: user.id
  })

  const handleChange = e => {
    setDeckToPost({
      ...deckToPost,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postNewDeck(deckToPost));
    setDeckToPost({
      deck_name: '',
      user_id: user.id
    })
  }

  const colors = ["#61F1D2", "#FF50CE", "#009DF6", "#FFD037", "#FF2323", "#0047D9"];

  //   handleChange(colors, e){
  //    backgroundColor:
  //   }

  return (
    <div style={{ backgroundColor: `${colors}` }}>
      <form onSubmit={handleSubmit}>
        CreateDeckForm
        <h3>Title</h3>
        <input placeholder="What are you studying?" onChange={handleChange} />
        <h3>Photo</h3>
        <p>X</p>
        <h3>or choose a color</h3>
        <CirclePicker colors={colors} onChangeComplete={(handleChange) => setColor(handleChange)} />
      </form>
    </div>
  );
};

export default CreateDeckForm;

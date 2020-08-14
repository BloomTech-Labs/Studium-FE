import React, {useState} from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'

const UpdateClasses = props =>{
    const [update, setUpdate] = useState({
        deckName:''
    })

    const handleUpdate = id =>{
        console.log(props.updateInfo)
        axiosWithAuth()
        .put(`/decks`, props.updateInfo)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
          })
    }

    return(
        <div className='update'>
            <button onClick={()=> handleUpdate(props.id)}>Update</button>
        </div>
    )
}

export default UpdateClasses;
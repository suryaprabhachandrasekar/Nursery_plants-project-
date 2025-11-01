// const [image, setImage] = useState(null)

// const onImageChange = (event) => {
//  if (event.target.files && event.target.files[0]) {
//    setImage(URL.createObjectURL(event.target.files[0]));
//  }
// }

// return (
//   <div>
//     <input type="file"  className="filetype" />
//     <img alt="preview image" src={image} />
//     <button onClick={onImageChange}>Submit</button>
//   </div>
// )
import React,{useState} from 'react'
export const Demo = () => {
    const [image, setImage] = useState(null)
    
    const onImageChange = (event) => {
        console.log('image');
        
         if (event.target.files && event.target.files[0]) {
            console.log('image');
            
           setImage(URL.createObjectURL(event.target.files[0]));
        //    console.log(image);
           
         }
        }
    return (
        <div>
            <input type="file" className="filetype" />
            <button onClick={(event)=>onImageChange(event)}>Submit</button>
            <img alt="preview_image" src={image} />
            
        </div>
    )
}

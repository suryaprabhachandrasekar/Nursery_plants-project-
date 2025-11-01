import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Newpost = () => {
    const [data, setData] = useState({
        fname: "",
        content: "",
        likes: 0,
        comments: [],
        file: null,
    })
    const nav = useNavigate()
    // console.log(data)
    const handleFileChange = (event) => {
        setData({ ...data, file: event.target.files[0] });
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("fname", data.fname);
		formData.append("content", data.content);
		formData.append("file", data.file);
        //   console.log(data)
        let data1 = await axios.post('http://localhost:8080/feed', formData)
        // console.log(data1?.data?.success)
        // console.log(data1)
        if (data1?.data?.success) {
            window.alert('posted successfully')
            setData({
                fname: "",
                content: "",
            })
            nav('/')
        }
    }
    // console.log(data)
    return (
        <>
            <div className='container text-center border rounded '>
                <form className='border rounded p-3 m-3'>
                    <div className='mt-3 '>
                        <label>User Name</label>
                        <input type='text' name='fname' value={data.fname} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div>
                        <label>Content</label>
                        <input type='text' name="content" value={data.content} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}></input>
                    </div>
                    <div className='mt-2'>
                        <input type="file" name="file" onChange={handleFileChange} />
                    </div>
                    <button onClick={handleSubmit} className='btn btn-info'>Post</button>
                </form>
            </div>
        </>
    )
}

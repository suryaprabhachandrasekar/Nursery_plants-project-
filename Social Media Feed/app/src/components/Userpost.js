import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Userpost = ({ val }) => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fun1()
    }, [])
    async function fun1() {
        const data = await axios.get('http://localhost:8080/allfeed')
        // console.log(data?.data?.data)
        const fdata = data?.data?.data
        if (val.fname) {
            const fdata1 = fdata.filter((x) => x?.fname?.toLowerCase() === val.fname?.toLowerCase())
            // console.log(fdata1)
            setPost(fdata1)
            // console.log(fdata1)
        }
        else{
            setPost(data?.data?.data)
        }
    }
    // console.log(post)
    const [comment, setComment] = useState(null)
    function handleClick(ind) {
        // console.log(ind)
        setComment(ind)
    }
    const [inp, setInp] = useState('')
    async function handlePost(id) {
        const data = await axios.post('http://localhost:8080/update/' + id, { text: inp })
        // console.log()
        if (data?.data?.success) {
            window.alert('comment posted successfully')
            // window.location.reload()
            fun1()
            setInp('')
            console.log(post)
        }
    }
    async function handleLike(id, ind) {
        // console.log(id)
        const data = await axios.post('http://localhost:8080/inclike/' + id)
        if (data?.data?.success) {
            fun1()
            // setLike(false)
        }
    }
    return (
        <>{val.fname?
            <div className='container shadow-none p-3 mb-3 bg-light rounded'>
                <div className='row '>
                    {
                        post.map((val, ind) => (
                            <div className='col-lg-12 mb-3' key={ind}>
                                <div className='card shadow-sm mb-1 bg-light rounded ' >
                                    <div className='card-header'>
                                        <h3 >{val.fname}</h3>
                                    </div>
                                    <div className='card-body'>
                                        <p className='card-text'>{val.content}</p>
                                    </div>
                                    <div className='ms-1 d-flex gap-3 mb-2'>
                                        <button className='inactive' onClick={() => handleLike(val._id)}>Like</button>

                                        <button className='btn btn-success'>{val.likes}</button>
                                        <button className='btn btn-light ' onClick={() => handleClick(ind)}>Comments</button>
                                    </div>
                                    {comment === ind ?
                                        <div className=' card-header'>
                                            {
                                                val.comments.map((val, ind) => (
                                                    <div key={ind}>
                                                        <p>{val}</p>
                                                    </div>
                                                ))
                                            }
                                            <input type='text' value={inp} placeholder=' post comment' onChange={(e) => setInp(e.target.value)}></input>
                                            <button className='btn btn-info ms-2' onClick={() => handlePost(val._id)}>Post</button>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>:
            <div className='container shadow-none p-3 mb-5 bg-light rounded'>
            <h5>Please Login to view your post</h5>
            </div>
            }
        </>
    )
}

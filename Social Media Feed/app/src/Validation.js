import React, { useState } from 'react'

export default function Validation() {

    let alldata = {
        fname: { required: false },
        lname: { required: false },
        city: { required: false },
        pass: { required: false },
        cpass:{required:false},
        conpass:{required:false}
    }

    const [error, setError] = useState(alldata)

    const [val, setVal] = useState({
        fname: "",
        lname: "",
        city: "",
        pass: "",
        cpass:""
    })

    function changeval(e) {
        setVal({ ...val, [e.target.name]: e.target.value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        let err = {
            fname: { required: false },
            lname: { required: false },
            city: { required: false },
            pass: { required: false },
            cpass:{required:false},
            conpass:{required:false}
        }

        if (!val.fname) {
            err.fname.required = true
        }
        else if(!val.lname){
            err.lname.required = true
        }
        else if(!val.city){
            err.city.required = true
        }
        else if(!val.pass){
            err.pass.required = true
        }
        else if(!val.cpass){
            err.cpass.required = true
        }
        else if(val.pass !== val.cpass){
            err.conpass.required=true
        }
        else{
            alert("Login successfully")
        }
        setError(err)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter your Firstname</label>
                    <input name='fname' onChange={changeval} />
                    {
                        error.fname.required ? (<p>please Enter your firstname</p>) : null
                    }
                </div>
                <div>
                    <label>Enter your LastNmae</label>
                    <input name='lname' onChange={changeval} />
                    {
                        error.lname.required ? (<p>please Enter your lastname</p>) : null
                    }
                </div>
                <div>
                    <label>Enter your City</label>
                    <input name='city' onChange={changeval} />
                    {
                        error.city.required ? (<p>please Enter your city</p>) : null
                    }
                </div>
                <div>
                    <label>Enter your Password</label>
                    <input name='pass' onChange={changeval} />
                    {
                        error.pass.required ? (<p>please Enter your password</p>) : null
                    }
                </div>
                <div>
                    <label>Enter your conform Password</label>
                    <input name='cpass' onChange={changeval} />
                    {
                        error.cpass.required ? (<p>please Enter your password</p>) : null
                    }
                    {
                        error.conpass.required ? (<p>Your password is missmached</p>) : null
                    }
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

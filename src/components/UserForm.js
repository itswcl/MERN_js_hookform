import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")

    // const displayForm = (e) => {
    //     e.preventDefault();
    //     const newUser = {firstName, lastName, email, password, confirmedPassword};
    // }

    return (
        <>
            <form className='mx-auto' style={{width: "550px"}}>
                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>First Name</label>
                    <div className='col-sm-4'>
                        <input type="text" onInput={(e) => setFirstName(e.target.value)} value={firstName} className='form-control' />
                    </div>
                </div>
                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Last Name</label>
                    <div className='col-sm-4'>
                        <input type="text" onInput={(e) => setLastName(e.target.value)} value={lastName} className='form-control' />
                    </div>
                </div>
                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Email</label>
                    <div className='col-sm-4'>

                        <input type="text" onInput={(e) => setEmail(e.target.value)} value={email} className='form-control' />
                    </div>
                </div>
                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Password</label>
                    <div className='col-sm-4'>

                        <input type="password" onInput={(e) => setPassword(e.target.value)} value={password} className='form-control' />
                    </div>
                </div>
                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Confirm Password</label>
                    <div className='col-sm-4'>

                        <input type="password" onInput={(e) => setConfirmedPassword(e.target.value)} value={confirmedPassword} className='form-control' />
                    </div>
                </div>
            </form>
            <h1 className='text-center'>Your Form Data</h1>
            <form className='mx-auto' style={{width: "550px"}}>
                <div className='form-group row'>

                    <label className='col-sm-4 col-form-label'>First Name</label>
                    {firstName}
                </div>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label'>Last Name</label>
                    {lastName}

                </div>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label'>Email</label>
                    {email}

                </div>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label'>Password</label>
                    {password}

                </div>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label'>Confirm Password</label>
                    {confirmedPassword}

                </div>
            </form>
        </>
    )
}

export default UserForm;
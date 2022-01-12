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
        <form>
            <div className='form-group'>
                <label>First Name</label>
                <input type="text" onInput={ (e) => setFirstName(e.target.value)} value={firstName} className='form-control' />
            </div>
            <div className='form-group'>
                <label>Last Name</label>
                <input type="text" onInput={ (e) => setLastName(e.target.value)} value={lastName}  className='form-control' />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="text" onInput={ (e) => setEmail(e.target.value)} value={email}  className='form-control' />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="text" onInput={ (e) => setPassword(e.target.value)} value={password}  className='form-control' />
            </div>
            <div className='form-group'>
                <label>Confirm Password</label>
                <input type="text" onInput={ (e) => setConfirmedPassword(e.target.value)} value={confirmedPassword}  className='form-control' />
            </div>
        </form>
        <table>
            <h1>Your Form Data</h1>
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>Confirm Password</td>
                    <td>{confirmedPassword}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default UserForm;
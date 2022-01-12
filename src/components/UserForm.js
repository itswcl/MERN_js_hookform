import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFNerror] = useState("")

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLNerror] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailerror] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPWerror] = useState("")

    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [conPasswordError, setConPWerror] = useState("")

    const [submitError, setSubmitMessage] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        let isEmpty = false;

        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].value === "") {
                isEmpty = true
            }
        }

        if (isEmpty || firstNameError || lastNameError || emailError || passwordError || conPasswordError) {
            setSubmitMessage("fix the error!")
        } else {
            const newUser = { firstName, lastName, email, password, confirmedPassword };
            setSubmitMessage(`Welcome ${newUser.lastName}`)
        }
    }


    const handleName = (e) => {
        if (e.target.id === "firstname") {
            setFirstName(e.target.value);
            if (e.target.value.length < 2) {
                setFNerror("First name must be at least 2 characters")
            } else {
                setFNerror("");
            }
        } else if (e.target.id === "lastname") {
            setLastName(e.target.value);
            if (e.target.value.length < 2) {
                setLNerror("Last name must be at least 2 characters")
            } else {
                setLNerror("");
            }
        }
    }


    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailerror("Email must be at least 5 characters")
        } else {
            setEmailerror("");
        }
    }


    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPWerror("Password must be at least 8 characters")
        } else {
            setPWerror("");
        }
    }


    const handleConPassword = (e) => {
        setConfirmedPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConPWerror("Confirm Password must be at least 8 characters")
        } else if (e.target.value !== password) {
            setConPWerror("Confirm Password must be same as Password")
        } else {
            setConPWerror("");
        }
    }


    return (
        <>
            <form onSubmit={createUser} className='mx-auto' style={{ width: "550px" }}>
                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>First Name</label>
                    <div className='col-sm-4'>
                        <input type="text" id="firstname" onChange={handleName} value={firstName} className='form-control' />
                    </div>
                    {
                        firstNameError
                            ? <p style={{ color: 'yellow' }}>{firstNameError}</p>
                            : ''
                    }
                </div>

                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Last Name</label>
                    <div className='col-sm-4'>
                        <input type="text" id="lastname" onChange={handleName} value={lastName} className='form-control' />
                    </div>
                    {
                        lastNameError
                            ? <p style={{ color: 'yellow' }}>{lastNameError}</p>
                            : ''
                    }
                </div>

                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Email</label>
                    <div className='col-sm-4'>

                        <input type="text" onChange={handleEmail} value={email} className='form-control' />
                    </div>
                    {
                        emailError
                            ? <p style={{ color: 'yellow' }}>{emailError}</p>
                            : ''
                    }
                </div>

                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Password</label>
                    <div className='col-sm-4'>

                        <input type="password" onInput={handlePassword} value={password} className='form-control' />
                    </div>
                    {
                        passwordError
                            ? <p style={{ color: 'yellow' }}>{passwordError}</p>
                            : ''
                    }
                </div>

                <div className='form-group row bg-secondary p-1 m-1'>
                    <label className='col-sm-4 col-form-label'>Confirm Password</label>
                    <div className='col-sm-4'>

                        <input type="password" onInput={handleConPassword} value={confirmedPassword} className='form-control' />
                    </div>
                    {
                        conPasswordError
                            ? <p style={{ color: 'yellow' }}>{conPasswordError}</p>
                            : ''
                    }
                </div>

                <input type="submit" value="Create"></input>
                {
                    createUser
                        ? <p>{submitError}</p>
                        : ""
                }
            </form>
        </>
    )
}

export default UserForm;
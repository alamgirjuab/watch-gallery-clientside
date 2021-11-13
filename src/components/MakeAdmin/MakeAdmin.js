import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://enigmatic-ocean-25875.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} type="text" name="email" id="" placeholder="email" />
                <button>submit</button>
            </form>
            {success && <div class="alert alert-success" role="alert">
                Made Admin Successfully
            </div>}
        </div>
    );
};

export default MakeAdmin;
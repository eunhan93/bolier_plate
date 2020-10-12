import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onNameHandler = (event ) => {
        setName(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event ) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호가 다릅니다');
        }
        
        let body = {
            email : Email,
            password : Password,
            name : Name
        }
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                props.history.push('/login');
            } else{
                alert('회원가입에 실패했습니다.');
            }
        });
        

    }
    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type = "email" value={Email } onChange={onEmailHandler} />
                <label>Name</label>
                <input type = "text" value={Name } onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button>
                    회원 가입
                </button>
            </form>
        </div>
    )
}
const styles = {
    container : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '100vh'
    },
    form : {
        display : 'flex',
        flexDirection : 'column'
    }
}
export default withRouter(RegisterPage)

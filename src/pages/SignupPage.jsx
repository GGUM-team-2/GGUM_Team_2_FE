import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [verificationNumber, setVerificationNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleback = (e) => {
        window.history.back();
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('회원가입 정보:', { email, verificationNumber, password, confirmPassword, nickname});
    };

    const handleEmailVerification = (e) => {
        e.preventDefault();
        console.log('이메일 인증 요청:', email);  
    };

    return(
         <div className='signup-page'>
            <div className='header'>
                <tr>
                    <td>
                        <button onClick={handleback} className="back-button"></button>
                        <a href="/LandingPage"><img src="back 2.png" alt="Back" className='back-icon'/></a>
                    </td>
                    <td>
                        <h2 className='header-title'>회원가입</h2>
                    </td>
                </tr>
            </div>
            <form className='signup-form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>이메일<br/>
                        <tr>
                            <td>
                                <input
                                    type='email'
                                    id='email'
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='@catholic.ac.kr'/>
                            </td>
                            <td>
                                <button onClick={handleEmailVerification} className="verify-btn"> 
                                    인증
                                </button>
                            </td>
                        </tr>
                        <div className='email-notice'>
                            <p>본인 소유의 가톨릭대학교 이메일 주소를 사용해주세요.</p>
                        </div>
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='number'>인증번호<br/>
                        <tr>
                            <td>
                                <input
                                    type='number'
                                    id='number'
                                    value={Number} 
                                    onChange={(e) => setVerificationNumber(e.target.value)}
                                    required/>
                            </td>
                            <td>
                                <button onClick={handleEmailVerification} className="verify-btn">
                                    인증
                                </button>
                            </td>
                        </tr>
                        {/*<div className='email-notice'>
                        </div>*/}
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>
                                <input
                                    type='password'
                                    id='password'
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder='영문 숫자 조합 8자리 이상'/>
                        {/*<div className='password-notice'>
                        </div>*/}
                    </label>
                </div>

                <div className='form-group'>
                    <label htmlFor='confirmPassword'>
                            <input
                                type='password'
                                id='confirmPassword'
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder='비밀번호를 한번 더 입력해주세요.'/>
                        {/*<div className='password-notice'>
                        </div>*/}
                    </label>
                </div>

                <div className='form-group'>
                    <label htmlFor='nickname'>
                        <input
                            type='text'
                            id='nickname'
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            required
                            placeholder='사용하실 닉네임을 입력해주세요.'/>
                    </label>
                </div>
                <div className="form-group">
                    <input type="submit" className="signup-btn" value={'회원가입'}/>
                </div>
            </form>
        </div>
    );
};

export default Signup;
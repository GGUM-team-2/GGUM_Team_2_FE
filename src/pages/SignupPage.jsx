import React, { useState } from 'react';
import styled from 'styled-components';
import { signup } from '../api/signup';
import { authCode } from '../api/authCode';
import { emailshoot } from '../api/emailshoot';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [aCode, setACode] = useState('');
    const [password, setPassword] = useState('');
    const [userName,setUserName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@catholic\.ac\.kr$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    //회원가입
    const initSignup=()=>{
        console.log("all is,",email,userName,password)
        signup(email,userName,password);
    }
    //인증번호확인
    const verifyCode=()=>{
        emailshoot(email);
    }

    const validateEmail = () => {
        if (!isEmailValid) {
            setEmailError('이메일 주소가 올바르지 않습니다.');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (!isPasswordValid) {
            setPasswordError('영문, 숫자 조합 8자리 이상 입력해주세요.');
        } else {
            setPasswordError('');
        }
    };

    const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
            setConfirmPasswordError('입력한 비밀번호와 일치하지 않습니다.');
        } else {
            setConfirmPasswordError('');
        }
    };

    return (
        <SignupWrapper>
            <RecentAuctionsHeader>
                <BackButton src='/assets/back_1.svg' alt="Back" />
                <HeaderTitle>회원가입</HeaderTitle>
            </RecentAuctionsHeader>
            <SignUpForm>
                {/* 이메일 입력 */}
                <Label>이메일</Label>
                <VerificationWrapper>
                    <VerificationInput 
                        type="text" 
                        placeholder="@catholic.ac.kr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                    />
                    <VerifyButton disabled={!isEmailValid} onClick={verifyCode}>인증</VerifyButton>
                </VerificationWrapper>
                <ErrorText>{emailError || '\u00A0'}</ErrorText>
                <InfoText>본인 소유의 가톨릭대학교 이메일 주소를 사용해 주세요.</InfoText>

                {/* 인증번호 입력 */}
                <Label>인증번호</Label>
                <VerificationWrapper>
                    <VerificationInput type="text" onChange={(e) => setACode(e.target.value)} />
                    <VerifyButton>확인</VerifyButton>
                </VerificationWrapper>
                <ResendText>인증번호 다시 받기</ResendText>

                {/* 비밀번호 입력 */}
                <Label>비밀번호</Label>
                <Input 
                    type="password" 
                    placeholder="영문 숫자 조합 8자리 이상"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={validatePassword}
                />
                <ErrorText>{passwordError || '\u00A0'}</ErrorText>

                {/* 비밀번호 확인 */}
                <Label>비밀번호 확인</Label>
                <Input 
                    type="password" 
                    placeholder="비밀번호를 한 번 더 입력해주세요."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={validateConfirmPassword}
                />
                <ErrorText>{confirmPasswordError || '\u00A0'}</ErrorText>

                {/* 닉네임 입력 */}
                <Label>닉네임</Label>
                <Input 
                    type="text"
                    placeholder="사용하실 닉네임을 입력해주세요." 
                    onChange={(e) => setUserName(e.target.value)}
                />

                {/* 제출 버튼 */}
                <SubmitButton onClick={initSignup}>회원가입 완료</SubmitButton>
            </SignUpForm>
        </SignupWrapper>
    );
};

export default SignupPage;

const SignupWrapper = styled.div`
    position: relative;
    width: 375px;
    height: 732px;
    margin: 0 auto;
    padding-top: 80px;
    font-family: 'NotoSansKR', sans-serif;
    background-color: #ffffff;
    z-index: 10;
`;

const RecentAuctionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 375px;
  height: 80px;
  background-color: #ffffff;
  border-bottom: 1px solid #EFEFEF;
  z-index: 10;
`;

const HeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0;
`;

const BackButton = styled.img`
  position: absolute;
  left: 20px;
  width: 30px;
  color: #4D7EFF;
  cursor: pointer;
`;

const SignUpForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 20px;
    gap: 10px;
`;

const Label = styled.label`
    font-size: 18px;
    margin: 0;
    color: #4D7EFF;
    font-weight: bold;
    margin-bottom: 6px;
`;

const VerificationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 46px;
`;

const VerificationInput = styled.input`
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 46px;
    box-sizing: border-box;
`;

const VerifyButton = styled.button`
    background-color: #4D7EFF;
    color: white;
    border: none;
    height: 46px;
    border-radius: 10px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    font-size: 14px;
    padding: 0 12px;
    margin-bottom: 20px;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const InfoText = styled.p`
    font-size: 12px;
    color: #4D7EFF;
    margin-top: -8px;
    margin-bottom: 15px;
`;

const ErrorText = styled.p`
    font-size: 12px;
    color: red;
    margin-top: -8px;
    margin-bottom: 15px;
    min-height: 15px; /* 오류 메시지가 없어도 공간을 차지하도록 설정 */
`;

const ResendText = styled.p`
    font-size: 12px;
    color: #4D7EFF;
    cursor: pointer;
    margin: -8px 0 15px 0;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 46px;
    box-sizing: border-box;
`;

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4D7EFF;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    width: 100%;
`;

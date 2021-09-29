/*global Kakao*/ 
import React, {useEffect} from 'react';
import axios from 'axios';

const loginWithKakao = () => {

  const scope = "profile_nickname,profile_image, account_email";
  window.Kakao.Auth.login({
    scope,
    // success는 인증 정보를 응답(response)으로 받는다. 
    success: function (response) {
     //카카오 SDK에 사용자 토큰을 설정한다.
      window.Kakao.Auth.setAccessToken(response.access_token);
      console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
      
      var ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();

      
      window.Kakao.API.request({
      url: "/v2/user/me",
      success: function ({ kakao_account }) {
        //어떤 정보 넘어오는지 확인
        console.log(kakao_account);
        const {  email,profile } = kakao_account;
        
        console.log(email);
        console.log(`responsed img: ${profile.profile_image_url}`);
        console.log(profile.nickname);

        axios({
          method: "post",
          url: "/v2/user/me",
          data: {
            "id": email,
            "nickname": profile.nickname,
            "image" :profile.profile_image_url,
          },
        })
          .then((res) => {
            if (res.token) {
            console.log(res);
            console.log('로그인에 성공하였습니다.')
            window.history.push("/login");}
            else {
              console.log('다시 확인해주세요.')
            }
          })
          .catch((error) => {
            // console.log(error);
            console.error(error);
            alert("로그인 에러");
          });

      },
      fail: function (error) {
        console.log(error);
      },
    });


    },
    fail: function (error) {
      console.log(error);
    },
  });

};
 

const KakaoLogin = () => {
  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="250" style = {{padding:'200px 0px 200px 0px'}}
        />
      </a>
    </div>
  );
};

export default KakaoLogin;
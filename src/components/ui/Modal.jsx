import React from "react";
import Button from "./Button";

export default function Modal({ onClose, onCloseFor24Hours }) {
  return (
    <div className="mask w-full h-full fixed top-0 left-0 z-20 bg-black bg-opacity-70">
      <div className="fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[400px] bg-white flex flex-col rounded-md p-5 items-center">
        <h4 className="text-center font-bold text-lg text-black">안내</h4>
        <p className="pt-6 pb-2 text-black">
          <strong>GOOGLE 계정</strong>으로 <strong>로그인</strong> 하시면 cart와 edit 기능을 사용할
          수 있습니다. <br />
          <span className="text-sm pt-2">
            (로그인 방식은 Firebase Google 로그인 연동이며 API와 OAuth 2.0 인증 방식을 사용하고
            있습니다. 이는 구글이 제공하는 공식 인증 시스템으로 보안적으로 안전하게 처리된다고
            합니다.)
          </span>
        </p>
        <img src="assets/images/after-login.jpg" alt="" />
        <div className="flex w-full justify-between mt-4">
          <Button text="하루동안 보지않기" onClick={onCloseFor24Hours}></Button>
          <Button text="닫기" onClick={onClose}></Button>
        </div>
      </div>
    </div>
  );
}

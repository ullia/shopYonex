import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer__top">
        <div className="inner">
          <div className="ft__logos">
            <img src="assets/images/logo-white.png" alt="" />
            <img src="assets/images/ccm_2022_mo.png" alt="" />
          </div>
          <div className="ft__Links">
            <ul>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>사업자정보확인</li>
            </ul>
          </div>
          <div className="ft__infos">
            <ul>
              <li>
                (주)동승통상
                <span class="ver_line"></span> 서울특별시 마포구 포은로 120 덕일빌딩
                <span class="ver_line"></span> 대표이사 : 김철웅
                <span class="ver_line"></span> 사업자등록번호 :{" "}
                <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1058104692" target="_blank">
                  105-81-04692
                </a>
                <span class="ver_line"></span> 통신판매신고 : 제 2010-서울마포-0794호
              </li>
              <li>
                개인정보보호책임자 : 강희국 상무 <span class="ver_line"></span> 담당자 E-mail :{" "}
                <a href="mailto:webmaster@yonex.co.kr">webmaster@yonex.co.kr</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="inner">
          <p>COPYRIGHT YONEX KOREA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}

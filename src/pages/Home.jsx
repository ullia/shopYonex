import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import SimpleSlider from "../components/ui/SimpleSlider";
import BannerSectionType1 from "../components/BannerSectionType1";
import Modal from "../components/ui/Modal";

export default function Home() {
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    // localStorage에서 'modalClosed' 값 확인
    const modalClosed = localStorage.getItem("modalClosed");

    // 'modalClosed' 값이 없거나 24시간이 지난 경우 모달을 띄움
    if (!modalClosed || new Date().getTime() - modalClosed > 86400000) {
      setModalStatus(true);
    }
  }, []);

  const closeModal = () => {
    setModalStatus(false);
  };

  const closeModalFor24Hours = () => {
    localStorage.setItem("modalClosed", new Date().getTime());
    setModalStatus(false);
  };

  return (
    <>
      <section className="overflow-hidden">
        <SimpleSlider />
        <BannerSectionType1 />
        <Products />
      </section>
      {modalStatus && <Modal onClose={closeModal} onCloseFor24Hours={closeModalFor24Hours} />}
    </>
  );
}

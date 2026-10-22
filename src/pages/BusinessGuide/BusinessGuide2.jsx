import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


// import page1 from "../../assets/BusinessGuide/BusinessGuide2/calendar.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "공급안내", url: "/BusinessGuide/documents" }
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>힐스테이트 오송레이크센트럴 | 분양일정 안내</title>

  <meta
    name="description"
    content="힐스테이트 오송레이크센트럴 분양일정 안내. 청주 오송읍 연제리에 계획된 브랜드 오피스텔의 공급공고와 분양·계약 일정 등 주요 일정 정보를 안내합니다."
  />

  <meta
    name="keywords"
    content="힐스테이트 오송레이크센트럴, 힐스테이트 오송레이크, 힐스테이트 오송레이크센트럴 분양일정, 힐스테이트 오송레이크센트럴 공급공고, 힐스테이트 오송레이크센트럴 계약일정, 오송 오피스텔 분양일정"
  />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/BusinessGuide/plan"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="분양일정" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 - 분양일정
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 분양일정 페이지입니다.
  충청북도 청주시 흥덕구 오송읍 연제리에 계획된
  힐스테이트 브랜드 오피스텔의 공급공고와 분양·계약 등
  주요 일정 정보를 안내합니다.
  세부 일정과 신청 방법은 사업주체의 공식 공급공고 및
  안내문을 기준으로 확인해 주세요.
</p>

<div className={styles.textBox}>
  <div>오송에서 만나는 새로운 힐스테이트 라이프</div>
  <div>힐스테이트 오송레이크센트럴 분양일정을 확인하세요.</div>
</div>

{/* <img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="힐스테이트 오송레이크센트럴 분양일정 및 공급공고 안내"
/> */}

<Ready/>

<div className={styles.readyContainer}>
  {/* 필요한 경우 Ready 또는 분양 카운트 컴포넌트 삽입 */}
</div>


            <Footer />
        </div>
    );
};

export default BusinessGuide2;

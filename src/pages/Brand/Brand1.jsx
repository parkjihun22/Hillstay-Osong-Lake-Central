import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      { title: "브랜드 소개", url: "/brand/intro" }, 
      // { title: "홍보 영상", url: "/brand/video" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>힐스테이트 오송레이크센트럴 | 브랜드 소개</title>

  <meta
    name="description"
    content="힐스테이트 오송레이크센트럴 브랜드 소개. 청주 오송읍 연제리에 계획된 브랜드 오피스텔로, 힐스테이트의 브랜드 가치와 오송역·오송호수공원 생활권을 바탕으로 새로운 주거 라이프를 소개합니다."
  />

  <meta
    name="keywords"
    content="힐스테이트 오송레이크센트럴, 힐스테이트 오송레이크, 힐스테이트 오송레이크센트럴 브랜드 소개, 힐스테이트 브랜드, 오송 오피스텔, 청주 오송 오피스텔"
  />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/Brand/intro"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="힐스테이트 오송레이크센트럴" />

  <meta
    property="og:title"
    content="힐스테이트 오송레이크센트럴 | 브랜드 소개"
  />

  <meta
    property="og:description"
    content="오송에서 만나는 힐스테이트 브랜드 오피스텔. 힐스테이트 오송레이크센트럴의 브랜드 가치와 오송의 생활환경을 소개합니다."
  />

  <meta
    property="og:url"
    content="https://www.ianflexity.co.kr/Brand/intro"
  />

  <meta
    property="og:image"
    content="https://www.ianflexity.co.kr/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 브랜드 소개 페이지입니다.
  충청북도 청주시 흥덕구 오송읍 연제리에 계획된 오피스텔로,
  힐스테이트의 브랜드 가치와 오송의 주거환경을 소개합니다.
  오송역을 이용하는 광역교통 생활권과 오송호수공원의 여가 환경,
  오송생명과학단지와 보건의료행정타운을 중심으로 형성된
  지역의 생활 기반을 살펴볼 수 있습니다.
  힐스테이트 오송레이크센트럴은 일과 생활, 휴식을 함께 고려하는
  새로운 주거 선택을 제안합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>오송의 일상에 힐스테이트의 가치를 더하다</div>
  <div>힐스테이트 오송레이크센트럴, 새로운 주거 라이프</div>
</div>

<img
  className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="힐스테이트 오송레이크센트럴 브랜드 소개"
/>
            <Footer />
        </div>
    );
}

export default Brand1;

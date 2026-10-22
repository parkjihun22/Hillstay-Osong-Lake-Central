import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";




const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>힐스테이트 오송레이크센트럴 | 프리미엄</title>

  <meta
    name="description"
    content="힐스테이트 오송레이크센트럴 프리미엄 안내. 청주 오송읍 연제리에 계획된 브랜드 오피스텔의 오송역 광역교통 생활권, 오송호수공원의 여가 환경과 바이오 산업 기반을 살펴보세요."
  />

  <meta
    name="keywords"
    content="힐스테이트 오송레이크센트럴, 힐스테이트 오송레이크, 힐스테이트 오송레이크센트럴 프리미엄, 힐스테이트 오송레이크센트럴 입지, 오송역 생활권, 오송호수공원, 오송생명과학단지, 오송 오피스텔"
  />

  <link
    rel="canonical"
    href="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/LocationEnvironment/primium"
  />

  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 - 프리미엄
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴의 주거 가치를 살펴보세요.
  충청북도 청주시 흥덕구 오송읍 연제리에 계획된
  힐스테이트 브랜드 오피스텔로, KTX·SRT 오송역을 이용하는
  광역교통 생활권과 오송호수공원의 산책·여가 환경,
  오송생명과학단지와 보건의료행정타운을 중심으로 형성된
  산업 기반을 함께 고려하는 주거 선택을 제안합니다.
</p>

<div className={styles.textBox}>
  <div>오송의 교통과 자연, 바이오 산업 기반을 함께</div>
  <div>힐스테이트 오송레이크센트럴의 주거 가치를 만나보세요.</div>
</div>

{/* <img
  src={page1}
  className={styles.image3}
  alt="힐스테이트 오송레이크센트럴 브랜드·교통·자연·직주근접 프리미엄 안내"
/> */}

<Ready/>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;

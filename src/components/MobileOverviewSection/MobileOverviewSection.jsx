// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>힐스테이트 오송레이크센트럴</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            충청북도 청주시 흥덕구 오송읍 연제리 664-1, 664-8번지 일원
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            지하 1층 ~ 지상 28층, 총 13개동
            (공개 홍보자료 기준)
          </span>
        </li>
        <li>
          <strong>공급정보</strong>
          <span>
            총 2,018실 규모의 오피스텔, 금회 2단지 703실 공급
            (공개 홍보자료 기준)
          </span>
        </li>
        <li>
          <strong>대지면적</strong>
          <span>공식 사업개요 확인 후 안내 예정</span>
        </li>
        <li>
          <strong>연면적</strong>
          <span>공식 사업개요 확인 후 안내 예정</span>
        </li>
        <li>
          <strong>건축면적</strong>
          <span>공식 사업개요 확인 후 안내 예정</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="힐스테이트 오송레이크센트럴 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="힐스테이트 오송레이크센트럴 반도체클러스터 및 생활권 안내 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            오송의 바이오 산업 기반과 호수공원 생활권을 누리는<br />
            힐스테이트 오송레이크센트럴 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "오송 바이오 산업 기반의 직주근접",
      desc:
        "오송생명과학단지와 보건의료행정타운 생활권<br/>일과 생활의 거리를 고려한 주거 선택<br/>오송의 산업 기반과 함께하는 힐스테이트 오송레이크센트럴",
    },
    {
      img: slide2,
      title: "전용 49㎡·59㎡ 중심의 공간 구성",
      desc:
        "전용 49㎡·59㎡로 소개되는 오피스텔<br/>생활방식에 맞춰 비교하는 타입별 공간 구성<br/>힐스테이트 오송레이크센트럴에서 나에게 맞는 공간을 만나보세요",
    },
    {
      img: slide3,
      title: "오송역을 이용하는 광역교통 생활권",
      desc:
        "KTX·SRT 오송역을 통한 광역 이동<br/>업무와 여가의 이동 범위를 넓히는 교통환경<br/>오송을 중심으로 이어지는 편리한 일상",
    },
    {
      img: slide4,
      title: "오송호수공원과 함께하는 여유",
      desc:
        "연제저수지 주변으로 조성된 오송호수공원<br/>호수 둘레길에서 즐기는 산책과 휴식<br/>바쁜 일상에 자연의 여유를 더하는 오송 생활권",
    },
    {
      img: slide5,
      title: "오송에서 만나는 힐스테이트",
      desc:
        "힐스테이트 브랜드로 선보이는 오피스텔<br/>입지와 공간을 함께 살펴보는 새로운 주거 선택<br/>힐스테이트 오송레이크센트럴에서 시작하는 일상",
    },
    {
      img: slide6,
      title: "오송의 변화와 함께하는 미래비전",
      desc:
        "오송 제3생명과학 국가산업단지 조성 추진<br/>바이오 산업 기반의 확장이 기대되는 오송<br/>현재의 생활환경과 미래의 변화를 함께 살펴보세요",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}

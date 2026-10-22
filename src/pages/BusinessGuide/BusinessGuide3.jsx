import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "공급안내", url: "/BusinessGuide/documents" },
		{ title: "모집공고안내", url: "/SalesInfo/announcement" },
		// { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
		// { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
		// { title: "청약안내문", url: "/SalesInfo/guide" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  {/* 필수 메타 */}
  <title>힐스테이트 오송레이크센트럴 | 공급안내</title>

  <meta
    name="description"
    content="힐스테이트 오송레이크센트럴 공급안내. 청주 오송읍 연제리에 계획된 브랜드 오피스텔의 공급정보와 타입 구성, 공급공고, 제출서류 및 계약 관련 주요 사항을 안내합니다."
  />

  <meta
    name="keywords"
    content="힐스테이트 오송레이크센트럴, 힐스테이트 오송레이크, 힐스테이트 오송레이크센트럴 공급안내, 힐스테이트 오송레이크센트럴 공급공고, 힐스테이트 오송레이크센트럴 계약, 힐스테이트 오송레이크센트럴 제출서류"
  />

  <meta name="robots" content="index,follow" />

  <link
    rel="canonical"
    href="https://www.ianflexity.co.kr/BusinessGuide/documents"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="힐스테이트 오송레이크센트럴" />

  <meta
    property="og:title"
    content="힐스테이트 오송레이크센트럴 | 공급안내"
  />

  <meta
    property="og:description"
    content="힐스테이트 오송레이크센트럴 오피스텔의 공급정보와 타입 구성, 제출서류 및 계약 관련 안내를 확인하세요."
  />

  <meta
    property="og:url"
    content="https://www.ianflexity.co.kr/BusinessGuide/documents"
  />

  <meta
    property="og:image"
    content="https://www.ianflexity.co.kr/Main1.png"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="공급안내" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 - 공급안내
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 공급안내 페이지입니다.
  충청북도 청주시 흥덕구 오송읍 연제리에 계획된
  힐스테이트 브랜드 오피스텔의 공급정보와 타입 구성,
  공급공고, 제출서류 및 계약 관련 주요 사항을 안내합니다.
  신청 자격과 제출서류, 계약 절차 등 세부 내용은
  사업주체의 공식 공급공고 및 안내문을 기준으로 확인해 주세요.
</p>

<div className={styles.textBox}>
  <div>오송에서 만나는 힐스테이트 브랜드 오피스텔</div>
  <div>힐스테이트 오송레이크센트럴 공급정보를 확인하세요.</div>
</div>

{/* <img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="힐스테이트 오송레이크센트럴 오피스텔 공급정보 및 계약 안내"
/> */}

<Ready/>




			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;

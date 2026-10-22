import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" }, 
    // { title: "홍보 영상", url: "/brand/video" }
  
  ];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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

	return (
		<div className={styles.container}>
<Helmet>
  <title>힐스테이트 오송레이크센트럴 | 홍보영상</title>

  <meta
    name="description"
    content="힐스테이트 오송레이크센트럴 홍보영상 안내. 청주 오송읍 연제리에 계획된 브랜드 오피스텔의 소개 영상을 통해 오송역·오송호수공원 생활권과 오송의 주거환경을 만나보세요."
  />

  <meta
    name="keywords"
    content="힐스테이트 오송레이크센트럴, 힐스테이트 오송레이크, 힐스테이트 오송레이크센트럴 홍보영상, 오송 오피스텔, 청주 오송 오피스텔, 힐스테이트 브랜드"
  />

  <link
    rel="canonical"
    href="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/Brand/video"
  />

  <meta name="robots" content="index,follow" />

  {/* OG */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="힐스테이트 오송레이크센트럴" />

  <meta
    property="og:title"
    content="힐스테이트 오송레이크센트럴 | 홍보영상"
  />

  <meta
    property="og:description"
    content="오송에서 만나는 힐스테이트 브랜드 오피스텔. 힐스테이트 오송레이크센트럴의 브랜드와 생활환경을 홍보영상으로 살펴보세요."
  />

  <meta
    property="og:url"
    content="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/Brand/video"
  />

  <meta
    property="og:image"
    content="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/images/og/main.jpg"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />

  <meta
    name="twitter:title"
    content="힐스테이트 오송레이크센트럴 | 홍보영상"
  />

  <meta
    name="twitter:description"
    content="힐스테이트 오송레이크센트럴 소개 영상으로 오송의 생활과 자연, 브랜드 가치를 만나보세요."
  />

  <meta
    name="twitter:image"
    content="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/images/og/main.jpg"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="홍보영상" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 - 홍보영상
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 홍보영상 페이지입니다.
  충청북도 청주시 흥덕구 오송읍 연제리에 계획된
  힐스테이트 브랜드 오피스텔의 소개 영상을 안내합니다.
  오송역을 이용하는 광역교통 생활권과 오송호수공원의 여가 환경,
  오송생명과학단지와 보건의료행정타운을 중심으로 형성된
  지역의 생활 기반을 바탕으로 오송의 주거 가치를 살펴보세요.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>오송의 생활과 자연을 담은 힐스테이트 브랜드 라이프</div>
  <div>힐스테이트 오송레이크센트럴의 가치를 영상으로 만나보세요.</div>
</div>

			<div className={styles.videoContainer}>
				<YouTube
					videoId="9z8_2qPGqqs"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;

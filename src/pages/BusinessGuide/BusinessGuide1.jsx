import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
  { label: '사업명', value: '힐스테이트 오송레이크센트럴' },
  { label: '대지위치', value: '충청북도 청주시 흥덕구 오송읍 연제리 664-1, 664-8번지 일원' },
  { label: '사업규모', value: '지하 1층 ~ 지상 28층, 총 13개동 (공개 홍보자료 기준)' },
  { label: '공급실수', value: '총 2,018실, 금회 2단지 703실 공급 (공개 홍보자료 기준)' },
  { label: '공급타입', value: '전용 49㎡ · 59㎡ (공개 홍보자료 기준)' },
  { label: '대지면적', value: '공식 사업개요 확인 후 안내 예정' },
  { label: '연면적', value: '공식 사업개요 확인 후 안내 예정' },
  { label: '건축면적', value: '공식 사업개요 확인 후 안내 예정' },
  { label: '브랜드', value: '힐스테이트, 오송에서 만나는 브랜드 오피스텔' },
];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

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
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>

<Helmet>

<title>힐스테이트 오송레이크센트럴 | 사업안내</title>

<meta
  name="description"
  content="힐스테이트 오송레이크센트럴 사업안내. 충북 청주시 흥덕구 오송읍 연제리에 계획된 브랜드 오피스텔의 사업개요와 공급타입, 오송역·오송호수공원 생활권을 확인하세요."
/>

<meta
  name="keywords"
  content="힐스테이트 오송레이크센트럴, 힐스테이트 오송레이크, 힐스테이트 오송레이크센트럴 사업안내, 힐스테이트 오송레이크센트럴 사업개요, 오송 오피스텔, 청주 오송 오피스텔"
/>

<meta name="robots" content="index,follow" />

<link
  rel="canonical"
  href="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/BusinessGuide/intro"
/>

<meta property="og:type" content="website" />
<meta property="og:site_name" content="힐스테이트 오송레이크센트럴" />

<meta
  property="og:title"
  content="힐스테이트 오송레이크센트럴 | 사업안내"
/>

<meta
  property="og:description"
  content="청주 오송에서 만나는 힐스테이트 브랜드 오피스텔. 힐스테이트 오송레이크센트럴의 사업개요와 공급정보, 주변 생활환경을 살펴보세요."
/>

<meta
  property="og:url"
  content="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/BusinessGuide/intro"
/>

<meta
  property="og:image"
  content="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/img/og/business.jpg"
/>

<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />

<meta
  name="twitter:title"
  content="힐스테이트 오송레이크센트럴 | 사업안내"
/>

<meta
  name="twitter:description"
  content="힐스테이트 오송레이크센트럴의 사업개요와 공급타입, 오송의 교통·자연·산업 기반을 확인하세요."
/>

<meta
  name="twitter:image"
  content="https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/img/og/business.jpg"
/>

<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",

  "name": "힐스테이트 오송레이크센트럴 사업안내",

  "url": "https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/BusinessGuide/intro",

  "description": "힐스테이트 오송레이크센트럴은 충북 청주시 흥덕구 오송읍 연제리에 계획된 브랜드 오피스텔입니다. 사업개요와 공급타입, 오송역·오송호수공원 생활권을 안내합니다.",

  "primaryImageOfPage": {
    "@type": "ImageObject",
    "contentUrl": "https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/img/og/business.jpg",
    "width": 1200,
    "height": 630
  },

  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "홈",
        "item": "https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "사업안내",
        "item": "https://xn--3l2blb738brlax5bvxkgrcda877r35bp3fga322n.kr/BusinessGuide/intro"
      }
    ]
  }
})}
</script>

</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴 - 사업안내
</h1>

<p className={styles.screenReaderOnly}>
  힐스테이트 오송레이크센트럴은 충청북도 청주시 흥덕구
  오송읍 연제리 664-1, 664-8번지 일원에 계획된 오피스텔입니다.
  이 페이지에서는 사업개요와 공급타입, 단지 관련 정보를 안내합니다.
  오송역을 이용하는 광역교통 생활권과 오송호수공원의 여가 환경,
  오송생명과학단지와 보건의료행정타운을 중심으로 형성된
  지역의 생활 기반을 함께 살펴보세요.
</p>

<div className={styles.textBox}>
  <div>오송의 교통과 자연, 산업 기반을 잇는 주거 라이프</div>
  <div>힐스테이트 오송레이크센트럴, 새로운 주거 선택을 제안합니다.</div>
</div>

<img
  className={styles.img3}
  src={page1}
  alt="힐스테이트 오송레이크센트럴 사업개요 이미지"
/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;

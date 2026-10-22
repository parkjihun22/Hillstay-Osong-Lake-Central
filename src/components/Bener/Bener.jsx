import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="힐스테이트 오송레이크센트럴 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '힐스테이트 오송레이크센트럴'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          오송의 생활과 자연을 담은 새로운 주거 라이프.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          힐스테이트 오송레이크센트럴, 오송에서 만나는 힐스테이트 브랜드 오피스텔.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          오송역 생활권과 호수공원의 여유가 어우러진 일상을 만나보세요.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주 오송읍 연제리에서 만나는 힐스테이트 오송레이크센트럴.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          오송의 산업 기반과 생활환경을 함께 살펴보는 브랜드 오피스텔.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          나의 생활방식에 맞는 공간과 주거 가치를 확인해 보세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          힐스테이트 오송레이크센트럴
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          오송역의 광역교통과 오송호수공원의 여유를 누리는 생활권.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          오송생명과학단지와 보건의료행정타운을 중심으로 일과 생활을 연결합니다.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          오송의 일상을 담는 주거 공간, 힐스테이트 오송레이크센트럴.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          단지 구성과 공간 계획에서 나에게 맞는 생활의 모습을 살펴보세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          힐스테이트 오송레이크센트럴, 새로운 라이프스타일의 시작.
        </div>
      </>
    );
  }
};
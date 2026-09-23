import { useRef } from "react";
import "./App.css";

import photo1 from "./assets/images/photo1.png";
import photo2 from "./assets/images/photo2.png";
import photo3 from "./assets/images/photo3.png";
import photo4 from "./assets/images/photo4.png";
import photo5 from "./assets/images/photo5.png";

const services = [
  {
    title: "가정/개인 전담팀",
    items: [
      "상간녀 소송",
      "의처증 또는 의부증",
      "양육권, 재산권, 위자료 가정문제",
      "기타 어려운 문제",
    ],
  },
  {
    title: "신변경호 / 사건 전담팀",
    items: [
      "불청객 차단",
      "개인의 신변 경호 업무",
      "억울한 피의자",
      "공갈 협박을 당한 경우",
      "민, 형사상의 어려운 문제",
    ],
  },
  {
    title: "선거 전담팀",
    items: [
      "선거공고, 동선, 현수막 선거",
      "조합장, 이사장 선거",
      "기타 각종 선거",
    ],
  },
  {
    title: "기업 / 사업자 전담팀",
    items: [
      "불법창업 및 이직관련",
      "기업 내 부정, 부패, 비리",
      "회사내 공금횡령",
      "기업, 자영업자의 문제",
      "기업의 경영상 관련",
      "경쟁업체의 불법영업",
    ],
  },
  {
    title: "해외 출장 전담팀",
    items: [
      "해외 도주, 도피",
      "해외 현지 조사",
      "기타 해외 동행 출장 업무",
    ],
  },
  {
    title: "산재 / 의료 전담팀",
    items: [
      "교통사고 허위 환자",
      "불법 산재 수령자",
      "의료관련 허위 환자",
      "모든 보험 사기문제",
    ],
  },
];

const galleryImages = [photo1, photo2, photo3, photo4, photo5];

function App() {
  const photoScrollRef = useRef(null);

  const scrollPhotos = (direction) => {
    if (!photoScrollRef.current) return;

    const firstCard =
      photoScrollRef.current.querySelector(".photo-card");

    const gap = 16;

    const scrollAmount = firstCard
      ? firstCard.offsetWidth + gap
      : window.innerWidth <= 768
      ? 396
      : 536;

    photoScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="logo-area">
            <h1 className="main-title">창원탐정 대한조사기업</h1>
            <p>신뢰와 책임의 전문 조사 서비스</p>

        
          </div>

          <nav className="nav">
            <a href="#about">회사소개</a>
            <a href="#services">주요업무</a>
            <a href="#contact">상담안내</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">
            탐정사무소 · 상간녀 소송 · 조사기업
          </span>

          <h2>
            신중하고 정확한 대응으로
            <br />
            의뢰인의 문제 해결을 돕습니다
          </h2>

          <p className="hero-desc">
            대한조사기업은 상간녀 소송, 가정문제, 사건 관련, 선거 관련,
            기업 조사, 해외 출장 조사, 산재·의료 관련 업무까지 폭넓게
            대응합니다. 확인이 필요한 순간, 언제든 상담 문의를 남겨주세요.
          </p>

          <div className="hero-buttons">
            <a
              className="primary-btn"
              href="tel:01055576112"
            >
              전화상담{" "}
              <span className="phone-number">
                010-5557-6112
              </span>
            </a>

            <a
              className="secondary-btn"
              href="#contact"
            >
              상담안내 보기
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-title">
            <h3>회사소개</h3>
          </div>

          <div className="about-box">
            <p>
              창원 탐정사무소 대한조사기업은 관련 전문 자격을 갖춘
              조사 전문가를 중심으로 상담과 조사 업무를 진행합니다.
              <br />
              민감한 사안에 대한 충분한 검토를 바탕으로 필요한 조사와
              확인 절차를 체계적으로 안내하며,
              <br />
              의뢰인의 신뢰와 보안을 최우선으로 생각합니다.
            </p>

            <div className="photo-slider">
              <button
                type="button"
                className="photo-arrow left"
                onClick={() => scrollPhotos("left")}
                aria-label="이전 사진"
              >
                &#10094;
              </button>

              <div className="photo-scroll-wrap">
                <div
                  className="photo-scroll"
                  ref={photoScrollRef}
                >
                  {galleryImages.map((image, index) => (
                    <div
                      className="photo-card"
                      key={index}
                    >
                      <img
                        src={image}
                        alt={`회사사진 ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="photo-arrow right"
                onClick={() => scrollPhotos("right")}
                aria-label="다음 사진"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section section-gray"
      >
        <div className="container">
          <div className="section-title">
            <h3>주요업무</h3>
            <p>
              현장 안내 내용을 기준으로 정리한 전담 조사 서비스입니다.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div
                className="service-card"
                key={index}
              >
                <h4>{service.title}</h4>

                <ul>
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="section-title">
            <h3>상담안내</h3>
            <p>전화 및 방문 상담이 가능합니다.</p>
          </div>

          <div className="contact-box">
            <div className="contact-item">
              <span className="label">대표전화</span>

              <a href="tel:01055576112">
                <span className="phone-number">
                  010-5557-6112
                </span>
              </a>
            </div>

            <div className="contact-item">
              <span className="label">주소</span>

              <p>
                경남 창원시 성산구 동산로220번길 28-1 지하1층
                <br />
                창원지방검찰청 맞은편 도보 3분
              </p>
            </div>

            <div className="contact-item">
              <span className="label">영업시간</span>

              <p>매일 10:00 - 22:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* 기존 모바일 하단 전화상담 버튼 */}
      <a
        className="mobile-call-button"
        href="tel:01055576112"
      >
        전화상담&nbsp;&nbsp;010-5557-6112
      </a>

      <footer className="footer">
        <div className="container">
          <p>
            © 탐정사무소 대한조사기업. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
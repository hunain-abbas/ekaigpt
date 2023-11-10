import Head from 'next/head'
import Image from 'next/image'
import { PopupButton } from "react-calendly";

export default function Home() {
  return (
    <>
      <Head>
        <title>Margo</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content="Hunain Abbas from Rayn Group"/>
        <meta name="generator" content="Hugo 0.84.0" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className="bg-black">
      <main>
        <header className="mb-auto">
          <div className="container">
            <div className="py-5">
              <svg className="float-md-start mb-0" width="149" height="52" viewBox="0 0 149 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.9901 23.3128C41.1404 24.1867 41.2225 25.0843 41.2225 26.0014C41.2225 26.9185 41.1446 27.7771 40.9998 28.6329L47.2774 32.2567L50.6354 30.3182C50.8747 28.914 51 27.4723 51 26.0014C51 24.5304 50.8706 23.0414 50.6229 21.6164L47.2774 19.6834L40.9901 23.3128Z" fill="#9791C6"/>
                <path d="M35.5725 38.0723L36.388 38.5426L47.2774 32.2553L40.9998 28.6315C40.3639 32.4042 38.3864 35.7204 35.5725 38.0723Z" fill="#9E98CB"/>
                <path d="M25.5 41.7253C21.6675 41.7253 18.155 40.3517 15.4275 38.0723L14.612 38.5426L25.5 44.83L36.388 38.5426L35.5725 38.0723C32.845 40.3517 29.3325 41.7253 25.5 41.7253Z" fill="#A59FCF"/>
                <path d="M50.6229 21.6164C50.4239 20.4586 50.1442 19.3286 49.7935 18.2306L47.2774 19.6834L50.6229 21.6164Z" fill="#9791C6"/>
                <path d="M47.2774 19.6834L49.7935 18.2306C48.6621 14.6917 46.7806 11.4882 44.3341 8.80935L36.388 13.3961L47.2774 19.6821V19.6834Z" fill="#7872B3"/>
                <path d="M34.27 2.04748L25.5014 7.11018L36.3894 13.3961L44.3355 8.80935C41.5982 5.8118 38.1554 3.46971 34.2714 2.04748H34.27Z" fill="#5D58A3"/>
                <path d="M40.9901 23.3128L47.2774 19.6834L36.388 13.3975L35.5294 13.8929C38.353 16.2336 40.3388 19.5443 40.9887 23.3128H40.9901Z" fill="#7F78B7"/>
                <path d="M15.4706 13.8929C18.194 11.6357 21.6884 10.2775 25.5014 10.2775C29.3144 10.2775 32.8102 11.6357 35.5322 13.8929L36.3908 13.3975L25.5028 7.11157L14.6148 13.3975L15.472 13.8929H15.4706Z" fill="#6762A9"/>
                <path d="M15.4706 13.8929L14.6134 13.3975L3.72536 19.6834L10.0113 23.3128C10.6612 19.5443 12.6484 16.2336 15.4706 13.8929Z" fill="#6C67AC"/>
                <path d="M10.0002 28.6315L3.72258 32.2553L14.612 38.5426L15.4275 38.0723C12.6122 35.7204 10.6361 32.4042 10.0002 28.6315Z" fill="#8A83BE"/>
                <path d="M3.72397 32.2553L1.19122 33.7179C2.31565 37.2596 4.18877 40.4673 6.62967 43.1503L14.612 38.5413L3.72258 32.2539L3.72397 32.2553Z" fill="#908AC2"/>
                <path d="M25.5 44.83L34.334 49.9289C38.211 48.4983 41.6442 46.152 44.3717 43.1517L36.3894 38.5426L25.5014 44.83L25.5 44.83Z" fill="#BEB9DD"/>
                <path d="M34.27 2.04748C31.5354 1.04691 28.5824 0.5 25.5 0.5C22.4176 0.5 19.4659 1.04691 16.7314 2.04748L25.5 7.11018L34.2686 2.04748L34.27 2.04748Z" fill="#524E9C"/>
                <path d="M16.6674 49.9275C19.42 50.9447 22.3953 51.5 25.5 51.5C28.6047 51.5 31.58 50.9433 34.334 49.9275L25.5 44.8286L16.6674 49.9275Z" fill="#C6C3E2"/>
                <path d="M36.388 38.5426L44.3703 43.1517C46.8112 40.4686 48.6857 37.261 49.8088 33.7193L47.276 32.2567L36.3866 38.544L36.388 38.5426Z" fill="#B3AED7"/>
                <path d="M49.8102 33.7193C50.1595 32.6157 50.4378 31.4802 50.6354 30.3182L47.2774 32.2567L49.8102 33.7193Z" fill="#B3AED7"/>
                <path d="M14.612 38.5426L6.62967 43.1517C9.35724 46.152 12.7904 48.4983 16.6688 49.9289L25.5014 44.83L14.6134 38.5426L14.612 38.5426Z" fill="#AAA5D2"/>
                <path d="M25.5 7.11018L16.7314 2.04748C12.846 3.46971 9.40316 5.8132 6.66724 8.80935L14.6134 13.3961L25.5014 7.11018H25.5Z" fill="#57539F"/>
                <path d="M14.612 13.3961L6.66585 8.80935C4.21938 11.4882 2.33653 14.6903 1.20653 18.2306L3.72397 19.6834L14.612 13.3975V13.3961Z" fill="#5A56A1"/>
                <path d="M0.365995 30.3168C0.564997 31.4788 0.841929 32.6144 1.19122 33.7179L3.72397 32.2553L0.365995 30.3168Z" fill="#736DB0"/>
                <path d="M1.20653 18.2306C0.855845 19.3286 0.577521 20.4586 0.377128 21.6164L3.72397 19.6834L1.20653 18.2306Z" fill="#5A56A1"/>
                <path d="M10.0002 28.6315C9.85544 27.7757 9.77611 26.8976 9.77611 26C9.77611 25.1024 9.85961 24.1867 10.0099 23.3114L3.72397 19.6821L0.377128 21.615C0.130812 23.04 0 24.504 0 26C0 27.496 0.126637 28.9127 0.365995 30.3168L3.72397 32.2553L10.0016 28.6315L10.0002 28.6315Z" fill="#736DB0"/>
                <path d="M68.735 38H64.953V22.686H68.425L68.735 24.484C69.51 23.213 71.06 22.221 73.261 22.221C75.586 22.221 77.198 23.368 78.004 25.135C78.779 23.368 80.577 22.221 82.902 22.221C86.622 22.221 88.668 24.453 88.668 27.987V38H84.917V28.979C84.917 26.778 83.739 25.631 81.941 25.631C80.112 25.631 78.717 26.809 78.717 29.32V38H74.935V28.948C74.935 26.809 73.788 25.662 71.99 25.662C70.192 25.662 68.735 26.84 68.735 29.32V38ZM94.7677 38.403C91.5127 38.403 89.5287 36.512 89.5287 33.629C89.5287 30.808 91.5747 29.041 95.2017 28.762L99.7897 28.421V28.08C99.7897 26.003 98.5497 25.166 96.6277 25.166C94.3957 25.166 93.1557 26.096 93.1557 27.708H89.9317C89.9317 24.391 92.6597 22.221 96.8137 22.221C100.937 22.221 103.479 24.453 103.479 28.7V38H100.162L99.8827 35.737C99.2317 37.318 97.1547 38.403 94.7677 38.403ZM96.0077 35.551C98.3327 35.551 99.8207 34.156 99.8207 31.8V30.994L96.6277 31.242C94.2717 31.459 93.3727 32.234 93.3727 33.474C93.3727 34.869 94.3027 35.551 96.0077 35.551ZM114.634 22.624V26.127H113.239C110.511 26.127 108.806 27.584 108.806 30.56V38H105.024V22.717H108.589L108.806 24.949C109.457 23.43 110.914 22.407 112.96 22.407C113.487 22.407 114.014 22.469 114.634 22.624ZM113.762 30.002C113.762 25.538 116.676 22.19 121.047 22.19C123.341 22.19 125.139 23.151 126.038 24.794L126.255 22.686H129.758V37.225C129.758 42.34 126.689 45.533 121.729 45.533C117.327 45.533 114.32 43.022 113.855 38.93H117.637C117.885 40.914 119.404 42.092 121.729 42.092C124.333 42.092 126.007 40.449 126.007 37.907V35.365C125.046 36.791 123.155 37.69 120.954 37.69C116.614 37.69 113.762 34.435 113.762 30.002ZM117.575 29.909C117.575 32.482 119.218 34.404 121.698 34.404C124.302 34.404 125.914 32.575 125.914 29.909C125.914 27.305 124.333 25.507 121.698 25.507C119.187 25.507 117.575 27.398 117.575 29.909ZM130.603 30.312C130.603 25.538 134.044 22.252 138.787 22.252C143.53 22.252 146.971 25.538 146.971 30.312C146.971 35.086 143.53 38.372 138.787 38.372C134.044 38.372 130.603 35.086 130.603 30.312ZM134.385 30.312C134.385 33.102 136.183 34.993 138.787 34.993C141.391 34.993 143.189 33.102 143.189 30.312C143.189 27.522 141.391 25.631 138.787 25.631C136.183 25.631 134.385 27.522 134.385 30.312Z" fill="white"/>
              </svg>                      
              <div className="justify-content-center float-md-end">
                <form class="d-flex talk-expert" action="https://api.sheetmonkey.io/form/uLzg4xiiQgKvxP6JiXGRwt" method="Post">
                  <input type="email" name="email" placeholder="email@address.com" required/>
                  <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                  <button type="submit" className="btn btn-info">Talk to an expert</button>
                </form>
              </div>
            </div>
          </div>
        </header>
        <section className="py-lg-section herosec">
          <div className="container">
            <div className="row">
              <div className="text-center col-md-8 mx-auto">
                <h1 className="tx-grad mb-3 mb-lg-2">Watch AI boost your sales</h1>
                <p> Margo helps drive your business growth with actionable insights and personalised marketing campaigns.</p>
              </div>
              <div className="d-flex justify-content-center">
                <form class="d-flex talk-expert" action="https://api.sheetmonkey.io/form/uLzg4xiiQgKvxP6JiXGRwt" method="Post">
                  <input type="email" name="email" placeholder="email@address.com" required/>
                  <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                  <button type="submit" className="btn btn-info">Talk to an expert</button>
                </form>
              </div>
              <div className="video-container">
                {/* <Image src="/assets/images/placeholder.png" alt="image" /> */}
                <video poster="https://d1t9qjhcn1iwtp.cloudfront.net/images/raynstory.png" controls preload="auto">
                  <source src="https://d1t9qjhcn1iwtp.cloudfront.net/videos/our-story.mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-lg-section">
          <div className="container">
            <div className="row">
              <h2 className="text-center tx-grad mb-3 mb-lg-5 mx-auto">Features</h2>
              <div className="row">
                <div className="col-md-12">
                  <div className="featurebox d-flex align-items-center">
                    <div className="contentbox order-0 order-md-1">
                      <h4 className="tx-grad mb-2">Smart Strategy Recommendations</h4>
                      <p>Unlock actionable insights on growth strategy based on your business’ performance and data</p>
                    </div>
                    <div className="imgbox order-1 order-md-0">
                      <Image src="/assets/images/f1.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featurebox">
                    <div className="contentbox order-0 order-md-1">
                      <h4 className="tx-grad mt-4 mb-2">Personalised Marketing</h4>
                      <p>Target the right customers with analytics-fueled marketing campaigns, personalised for specific cohorts
                      </p>
                    </div>
                    <div className="imgbox order-1 order-md-0">
                      <Image src="/assets/images/f2.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="featurebox">
                    <div className="contentbox order-0 order-md-1">
                      <h4 className="tx-grad mt-4 mb-2">Data made simple</h4>
                      <p>Harness the power of data with easy data management that identifies where you should sharpen your focus</p>
                    </div>
                    <div className="imgbox order-1 order-md-0">
                      <Image src="/assets/images/f3.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-lg-section">
          <div className="container">
            <div className="row">
              <h2 className="text-center tx-grad mb-3 mb-lg-5 mx-auto">What users are saying</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="testimonialbox p-3 p-lg-4 mx-4">
                    <div className="topbox d-flex align-items-center mb-3 mb-lg-4">
                      <Image src="/assets/images/t1.png" alt="image" />
                      <p className="tx-white ps-3 m-0">Waseem Ahmed</p>
                    </div>
                    <div className="bottombox">
                      <p className="tx-white">Margo boosted my sales 3x by helping me understand my customers better and targeting them with automated marketing campaigns.</p>
                    </div>
                    <svg width="72" height="52" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.9318 19.8677C31.9318 7.99074 25.1197 0.468628 15.7029 0.468628C6.88718 0.468628 0.876465 6.60508 0.876465 15.3149C0.876465 24.0247 6.68683 28.9734 13.8997 28.9734C16.1036 28.9734 17.9068 28.5775 19.5097 27.9837C19.5097 34.9119 13.2986 40.2566 4.68325 41.8402V51.3418C20.7118 49.3623 31.9318 36.4955 31.9318 19.8677ZM71.6026 19.8677C71.6026 7.99074 64.7904 0.468628 55.3736 0.468628C46.5579 0.468628 40.5472 6.60508 40.5472 15.3149C40.5472 24.0247 46.1572 28.9734 53.3701 28.9734C55.574 28.9734 57.3772 28.5775 58.9801 27.9837C58.9801 34.9119 52.9693 40.2566 44.354 41.8402V51.3418C60.3826 49.3623 71.6026 36.4955 71.6026 19.8677Z" fill="#060B27"/>
                    </svg>                  
                  </div>
                  <div className="testimonialbgbox"></div>
                </div>
                <div className="col-md-4">
                  <div className="testimonialbox p-3 p-lg-4 mx-4">
                    <div className="topbox d-flex align-items-center mb-3 mb-lg-4">
                      <Image src="/assets/images/t2.png" alt="image" />
                      <p className="tx-white ps-3 m-0">Samantha</p>
                    </div>
                    <div className="bottombox">
                      <p className="tx-white">Thanks to Margo – I was able to save crucial money by targeting my customers better with personalised marketing campaigns!</p>
                    </div>
                    <svg width="72" height="52" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.9318 19.8677C31.9318 7.99074 25.1197 0.468628 15.7029 0.468628C6.88718 0.468628 0.876465 6.60508 0.876465 15.3149C0.876465 24.0247 6.68683 28.9734 13.8997 28.9734C16.1036 28.9734 17.9068 28.5775 19.5097 27.9837C19.5097 34.9119 13.2986 40.2566 4.68325 41.8402V51.3418C20.7118 49.3623 31.9318 36.4955 31.9318 19.8677ZM71.6026 19.8677C71.6026 7.99074 64.7904 0.468628 55.3736 0.468628C46.5579 0.468628 40.5472 6.60508 40.5472 15.3149C40.5472 24.0247 46.1572 28.9734 53.3701 28.9734C55.574 28.9734 57.3772 28.5775 58.9801 27.9837C58.9801 34.9119 52.9693 40.2566 44.354 41.8402V51.3418C60.3826 49.3623 71.6026 36.4955 71.6026 19.8677Z" fill="#060B27"/>
                    </svg>                  
                  </div>
                  <div className="testimonialbgbox"></div>
                </div>
                <div className="col-md-4">
                  <div className="testimonialbox p-3 p-lg-4 mx-4">
                    <div className="topbox d-flex align-items-center mb-3 mb-lg-4">
                      <Image src="/assets/images/t3.png" alt="image" />
                      <p className="tx-white ps-3 m-0">Haris bin Amir</p>
                    </div>
                    <div className="bottombox">
                      <p className="tx-white">Margo provided strategies I could adopt on how to execute targeted marketing campaigns. My business saw more growth than it had ever seen before.</p>
                    </div>
                    <svg width="72" height="52" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.9318 19.8677C31.9318 7.99074 25.1197 0.468628 15.7029 0.468628C6.88718 0.468628 0.876465 6.60508 0.876465 15.3149C0.876465 24.0247 6.68683 28.9734 13.8997 28.9734C16.1036 28.9734 17.9068 28.5775 19.5097 27.9837C19.5097 34.9119 13.2986 40.2566 4.68325 41.8402V51.3418C20.7118 49.3623 31.9318 36.4955 31.9318 19.8677ZM71.6026 19.8677C71.6026 7.99074 64.7904 0.468628 55.3736 0.468628C46.5579 0.468628 40.5472 6.60508 40.5472 15.3149C40.5472 24.0247 46.1572 28.9734 53.3701 28.9734C55.574 28.9734 57.3772 28.5775 58.9801 27.9837C58.9801 34.9119 52.9693 40.2566 44.354 41.8402V51.3418C60.3826 49.3623 71.6026 36.4955 71.6026 19.8677Z" fill="#060B27"/>
                    </svg>                  
                  </div>
                  <div className="testimonialbgbox"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="calltoaction">
                  <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <h3 className="tx-grad mb-3 mb-lg-2">Unlock your sales potential</h3>
                    <p>Get access to a ChatGPT powered bot that helps you sell more with Ai.</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <form class="d-flex talk-expert" action="https://api.sheetmonkey.io/form/uLzg4xiiQgKvxP6JiXGRwt" method="Post">
                      <input type="email" name="email" placeholder="email@address.com" required/>
                      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                      <button type="submit" className="btn btn-info">Talk to an expert</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-auto text-white text-center">
          <div className="container">
            <div className="row py-lg-section">
              <div className="col-md-6 mx-auto">
                <svg className="mb-3" width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.9901 22.8514C41.1404 23.7253 41.2225 24.6229 41.2225 25.54C41.2225 26.457 41.1446 27.3157 40.9998 28.1715L47.2774 31.7953L50.6354 29.8568C50.8747 28.4526 51 27.0109 51 25.54C51 24.069 50.8706 22.58 50.6229 21.155L47.2774 19.222L40.9901 22.8514Z" fill="#9791C6"/>
                  <path d="M35.5725 37.6109L36.388 38.0812L47.2774 31.7939L40.9998 28.1701C40.3639 31.9428 38.3864 35.259 35.5725 37.6109Z" fill="#9E98CB"/>
                  <path d="M25.5 41.2638C21.6675 41.2638 18.155 39.8903 15.4275 37.6109L14.612 38.0812L25.5 44.3685L36.388 38.0812L35.5725 37.6109C32.845 39.8903 29.3325 41.2638 25.5 41.2638Z" fill="#A59FCF"/>
                  <path d="M50.6229 21.155C50.4239 19.9972 50.1442 18.8672 49.7935 17.7692L47.2774 19.222L50.6229 21.155Z" fill="#9791C6"/>
                  <path d="M47.2774 19.222L49.7935 17.7692C48.6621 14.2303 46.7806 11.0268 44.3341 8.34792L36.388 12.9347L47.2774 19.2206V19.222Z" fill="#7872B3"/>
                  <path d="M34.27 1.58605L25.5014 6.64876L36.3894 12.9347L44.3355 8.34792C41.5982 5.35038 38.1554 3.00829 34.2714 1.58605H34.27Z" fill="#5D58A3"/>
                  <path d="M40.9901 22.8514L47.2774 19.222L36.388 12.9361L35.5294 13.4315C38.353 15.7722 40.3388 19.0829 40.9887 22.8514H40.9901Z" fill="#7F78B7"/>
                  <path d="M15.4706 13.4315C18.194 11.1743 21.6884 9.81608 25.5014 9.81608C29.3144 9.81608 32.8102 11.1743 35.5322 13.4315L36.3908 12.9361L25.5028 6.65015L14.6148 12.9361L15.472 13.4315H15.4706Z" fill="#6762A9"/>
                  <path d="M15.4706 13.4315L14.6134 12.9361L3.72536 19.222L10.0113 22.8514C10.6612 19.0829 12.6484 15.7722 15.4706 13.4315Z" fill="#6C67AC"/>
                  <path d="M10.0002 28.1701L3.72258 31.7939L14.612 38.0812L15.4275 37.6109C12.6122 35.259 10.6361 31.9428 10.0002 28.1701Z" fill="#8A83BE"/>
                  <path d="M3.72397 31.7939L1.19122 33.2565C2.31565 36.7982 4.18877 40.0058 6.62967 42.6889L14.612 38.0798L3.72258 31.7925L3.72397 31.7939Z" fill="#908AC2"/>
                  <path d="M25.5 44.3685L34.334 49.4674C38.211 48.0369 41.6442 45.6906 44.3717 42.6903L36.3894 38.0812L25.5014 44.3685L25.5 44.3685Z" fill="#BEB9DD"/>
                  <path d="M34.27 1.58605C31.5354 0.58548 28.5824 0.0385742 25.5 0.0385742C22.4176 0.0385742 19.4659 0.58548 16.7314 1.58605L25.5 6.64876L34.2686 1.58605L34.27 1.58605Z" fill="#524E9C"/>
                  <path d="M16.6674 49.466C19.42 50.4833 22.3953 51.0386 25.5 51.0386C28.6047 51.0386 31.58 50.4819 34.334 49.466L25.5 44.3672L16.6674 49.466Z" fill="#C6C3E2"/>
                  <path d="M36.388 38.0812L44.3703 42.6903C46.8112 40.0072 48.6857 36.7995 49.8088 33.2579L47.276 31.7953L36.3866 38.0826L36.388 38.0812Z" fill="#B3AED7"/>
                  <path d="M49.8102 33.2579C50.1595 32.1543 50.4378 31.0188 50.6354 29.8568L47.2774 31.7953L49.8102 33.2579Z" fill="#B3AED7"/>
                  <path d="M14.612 38.0812L6.62967 42.6903C9.35724 45.6906 12.7904 48.0369 16.6688 49.4674L25.5014 44.3685L14.6134 38.0812L14.612 38.0812Z" fill="#AAA5D2"/>
                  <path d="M25.5 6.64876L16.7314 1.58605C12.846 3.00829 9.40316 5.35177 6.66724 8.34792L14.6134 12.9347L25.5014 6.64876H25.5Z" fill="#57539F"/>
                  <path d="M14.612 12.9347L6.66585 8.34792C4.21938 11.0268 2.33653 14.2289 1.20653 17.7692L3.72397 19.222L14.612 12.9361V12.9347Z" fill="#5A56A1"/>
                  <path d="M0.365995 29.8554C0.564997 31.0174 0.841929 32.1529 1.19122 33.2565L3.72397 31.7939L0.365995 29.8554Z" fill="#736DB0"/>
                  <path d="M1.20653 17.7692C0.855845 18.8672 0.577521 19.9972 0.377128 21.155L3.72397 19.222L1.20653 17.7692Z" fill="#5A56A1"/>
                  <path d="M10.0002 28.1701C9.85544 27.3143 9.77611 26.4362 9.77611 25.5386C9.77611 24.641 9.85961 23.7253 10.0099 22.85L3.72397 19.2206L0.377128 21.1536C0.130812 22.5786 0 24.0426 0 25.5386C0 27.0346 0.126637 28.4512 0.365995 29.8554L3.72397 31.7939L10.0016 28.1701L10.0002 28.1701Z" fill="#736DB0"/>
                </svg>
                <h5>Your intelligent co-pilot for analytics and marketing</h5>
                <p>Margo, 2023.</p>
              </div>
            </div>
            <div className="copyright">
              <div className="float-md-start mb-0">
                <p>© 2023 Margo. All rights reserved.</p>
              </div>                      
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#">Terms of Service</a>
                <a className="nav-link" href="#">Privacy Policy</a>
                <a className="nav-link" href="#">Cookies</a>
              </nav> 
            </div>
          </div>
        </footer>
      </main>
</body>
    </>
  )
}

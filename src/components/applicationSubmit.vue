<template>
  <div class="profileMainDiv">
    <div class="profileDiv">
      <div class="LogoImg">
        <img src="../assets/img/logoWithDesc.png" alt="logoWithDesc" />
      </div>
      <div class="textContainer">
        <h1>Your Application has been submited</h1>
        <p class="ftpSoon">
          Fair Trader will soon send you some FTP coins to the Digital Wallet
          you have provided. You will need to have these coins in your wallet.
          in order to be registered on Fair Trader Global Platform.
        </p>

        <p class="needHelp">
          If you need help setting up a Digital Wallet please email
          <span>support@FairTrader.io</span>
        </p>

        <h2>Thank You</h2>
        <p class="thankTxt">
          Please check your email daily for your approval or in case we require
          additional information to confirm your identity or qualifications.
        </p>
      </div>
      <div class="bottomLinks">
        <h6 class="linkUs">Please Link with us for important updates:</h6>
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-3">
                <img src="../assets/img/facebook.png" alt="" />
              </div>
              <div class="col-8">
                <p>
                  Link to <br />
                  FaceBook
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 bottomLinkSec">
            <div class="row">
              <div class="col-3">
                <img src="../assets/img/twitter.png" alt="" />
              </div>
              <div class="col-8">
                <p>
                  Link to <br />
                  Telegram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {initializeApp} from 'https://www.gstatic'
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.profileMainDiv {
  background-color: #f9c602;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.profileDiv {
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  overflow: hidden;
}
.LogoImg {
  text-align: center;
}
.LogoImg img {
  display: inline-block;
  width: 300px;
}
.textContainer h1 {
  font-size: 40px;
  font-family: nunito;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 10px;
}
.ftpSoon {
  font-size: 20px;
  margin-bottom: 20px;
}
.needHelp {
  font-weight: bold;
  font-family: nunito;
  font-size: 20px;
}
.needHelp span {
  color: #096189;
  font-weight: bold;
  font-size: 20px;
}
.textContainer h2 {
  margin-top: 70px;
  color: white;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}
.thankTxt {
  font-size: 20px;
  color: white;
  text-align: center;
}
.linkUs {
  text-align: center;
  font-size: 20px;
  margin-top: 80px;
  margin-bottom: 20px;
}
.col-8 p {
  font-size: 17px;
}
.col-8 {
  margin-bottom: 80px;
}
@media (max-width: 1000px) {
  .profileDiv {
    width: 90%;
  }
}
@media (max-width: 600px) {
  .profileDiv {
    padding-top: 40px;
  }
}
@media (max-width: 500px) {
  .bottomLinkSec {
    position: relative;
    left: 50px;
  }
  .thankTxt {
    text-align: start;
  }
  .col-8 p {
    margin-left: 20px;
  }
}
@media (max-width: 413px) {
  .bottomLinkSec {
    left: 20px;
  }
  .LogoImg img {
    width: 230px;
  }
}
@media (max-width: 377px) {
  .textContainer h1 {
    font-size: 35px;
  }
}
@media (max-width: 349px) {
  .LogoImg img {
    width: 200px;
  }
}
</style>
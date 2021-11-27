<template>
  <div class="profileMainDiv">
    <div class="profileDiv">
      <div class="row">
        <div class="col-6">
          <img
            data-aos="fade-right"
            src="../assets/img/profilePic.png"
            class="profilePic"
            alt="profilePic"
          />
          <br />
          <span class="profileExampleTxt">Mediator Profile View Example</span>
        </div>
        <div class="col-6 paddTop" data-aos="fade-left">
          <h1>Setting up your Mediator Profile</h1>
          <p>
            Give confidence to you future customers by providing as much
            information about your services and experience.
            <span
              >The more info you provide the higher your trust score will
              be.</span
            >
          </p>
          <div class="row">
            <div class="col-6 profileForm">
              <h6>Country</h6>
              <select class="form-control" @change="handleChangeCountry">
                <option selected disabled>Please select</option>
                <option data-foo="Australia">Australia</option>
                <option data-foo="America">America</option>
                <option data-foo="France">France</option>
                <option data-foo="Turkey">Turkey</option>
                <option data-foo="Maxico">Maxico</option>
                <option data-foo="SaudiArabia">Saudi Arabia</option>
                <option data-foo="UnitedState">United State</option>
                <option data-foo="China">China</option>
                <option data-foo="Germany">Germany</option>
                <!-- <option value="1" data-foo="bar123">Bar</option>
                <option value="2" data-foo="baz456">Baz</option>
                <option value="3" data-foo="fiz789">Fiz</option> -->
              </select>
            </div>
            <div class="col-6 profileForm">
              <h6>City</h6>
              <select class="form-control" @change="handleChangeCity">
                <option selected disabled>Please select</option>
                <option data-foo="Paris">Paris</option>
                <option data-foo="NewYorkCity,USA">New York City, USA</option>
                <option data-foo="London">London</option>
                <option data-foo="Bangkok">Bangkok</option>
                <option data-foo="Hong Kong">Hong Kong</option>
                <option data-foo="Dubai">Dubai</option>
                <option data-foo="Singapore">Singapore</option>
                <option data-foo="Istanbul">Istanbul</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-6 profileForm">
              <h6>language</h6>
              <select class="form-control" @change="handleChangeLanguage">
                <option selected disabled>Please select</option>
                <option data-foo="English">English</option>
                <option data-foo="Mandarin">Mandarin</option>
                <option data-foo="Spanish">Spanish</option>
                <option data-foo="French">French</option>
                <option data-foo="Arabic">Arabic</option>
                <option data-foo="Russian">Russian</option>
                <option data-foo="Portuguese">Portuguese</option>
                <option data-foo="Indonesian">Indonesian</option>
                <option data-foo="Urdu">Urdu</option>
              </select>
            </div>
            <div class="col-6 profileForm">
              <h6>Industry</h6>
              <select class="form-control" @change="handleChangeIndustry">
                <option selected disabled>Please select</option>
                <option data-foo="Finance">Finance</option>
                <option data-foo="Trade">Trade</option>
                <option data-foo="Agriculture">Agriculture</option>
                <option data-foo="Manufacturing">Manufacturing</option>
                <option data-foo="Science">Science</option>
                <option data-foo="Industry">Industry</option>
                <option data-foo="Goods">Goods</option>
                <option data-foo="Mining">Mining</option>
              </select>
            </div>
          </div>
          <div class="profileForm" style="width: 106%">
            <h6>Enter Your FaceBook Page</h6>
            <input
              class="FacebookPageInput"
              type="text"
              placeholder="Enter your Facebook page link here ..."
              v-model="UserFacebookLink"
            />
          </div>
          <div class="profileForm" style="width: 106%">
            <h6>Phone Number</h6>
            <input
              class="FacebookPageInput PhoneFeild"
              type="text"
              placeholder="Enter your Phone Number ..."
              v-model="UserPhoneNumb"
            />
          </div>
          <span class="qualificationSpan">Qualifications</span>
          <p class="qualificationPara">
            If you have qualifications or degree upload here:
          </p>
          <div class="row">
            <div class="col-6 profileForm">
              <input
                type="file"
                class="chooseFile"
                multiple
                @change="onFileSelectedQualification"
              />
              <!-- <span class="chooseFileTxt">Please Choose File: </span> -->
            </div>
            <div class="col-6 profileForm">
              <input
                type="file"
                class="chooseFile"
                multiple
                @change="onFileSelectedQualification2"
              />
            </div>
          </div>
          <button class="profileBtn" @click="handleContinue()">Continue</button>
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
            <div class="col-6">
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
    <div class="profilePicDiv">
      <a href="/setMediatorProfile">
        <!-- <span class="medPrfEx" title="Click the image to Continue">Mediator Profile View Example</span> -->
        <span class="medPrfTxt">Mediator Profile View Example</span>
        <img
          src="../assets/img/profilePic.png"
          alt="profilePic"
          class="profilePicture"
      /></a>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
// import axios from "axios";
export default {
  name: "mediation",
  data() {
    return {
      counties: [
        "Australia",
        "America",
        "France",
        "Turkey",
        "Maxico",
        "Saudi Arabia",
        "United State",
        "China",
        "Germany",
      ],
      countryName: "",
      cityName: "",
      languageName: "",
      IndustryName: "",
      UserFacebookLink: "",
      UserPhoneNumb: "",
      istSelectedFileQual: "",
      sndSelectedFileQual: "",
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },
  methods: {
    handleContinue() {
      if (this.countryName === "") {
        this.$toasted.error("Invalid Country");
      } else if (this.cityName === "") {
        this.$toasted.error("Invalid City");
      } else if (this.languageName === "") {
        this.$toasted.error("Invalid Language");
      } else if (this.IndustryName === "") {
        this.$toasted.error("Invalid Industry");
      } else if (this.UserFacebookLink === "") {
        this.$toasted.error("Invalid Facebook Link");
      } else if (this.UserPhoneNumb === "") {
        this.$toasted.error("Invalid Phone Number");
      } else if (this.istSelectedFileQual === "") {
        this.$toasted.error("Invalid Qualification Img");
      } else {
        console.log(this.countryName);
        console.log(this.cityName);
        console.log(this.languageName);
        console.log(this.IndustryName);
        console.log(this.UserFacebookLink);
        console.log(this.UserPhoneNumb);
        console.log(this.istSelectedFileQual.name);
        console.log(this.sndSelectedFileQual.name);

        // const fd = new FormData();
        // fd.append('image', this.istSelectedFileQual, this.istSelectedFileQual.name)
        // axios.post('https://fair-trader-d7219-default-rtdb.firebaseio.com/qualificationImage', 'helllo')
        // .then(res => {
        //   console.log(res);
        // })
        //  .error(err => {
        //   console.log(err);
        // })
      }
    },
    handleChangeCountry(e) {
      if (e.target.options.selectedIndex > -1) {
        this.countryName =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
    },
    handleChangeCity(e) {
      if (e.target.options.selectedIndex > -1) {
        this.cityName =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
    },
    handleChangeLanguage(e) {
      if (e.target.options.selectedIndex > -1) {
        this.languageName =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
    },
    handleChangeIndustry(e) {
      if (e.target.options.selectedIndex > -1) {
        this.IndustryName =
          e.target.options[e.target.options.selectedIndex].dataset.foo;
      }
    },
    onFileSelectedQualification(e) {
      this.istSelectedFileQual = e.target.files[0];
      // console.log(this.istSelectedFileQual);
      this.$toasted.success("File Selected: " + this.istSelectedFileQual.name);
    },
    onFileSelectedQualification2(e) {
      this.sndSelectedFileQual = e.target.files[0];
      // console.log(this.sndSelectedFileQual);
      this.$toasted.success("File Selected: " + this.sndSelectedFileQual.name);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.profileMainDiv {
  background-color: #f9c602;
  width: 100%;
  height: 100vh;
}
.profileDiv {
  width: 70%;
  margin: 0 auto;
}
.profilePic {
  padding-top: 100px;
}
.paddTop h1 {
  padding-top: 100px;
  font-weight: bold;
  color: black;
  font-family: nunito;
  margin-bottom: 10px;
}
.paddTop p {
  font-size: 15px;
  word-spacing: 4px;
}
.paddTop p span {
  color: red;
  font-weight: bold;
}
.col-6 img {
  margin: 0 auto;
}
.form-control {
  width: 90%;
  padding-left: 10px;
}
.profileForm h6 {
  font-weight: bold;
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 7px;
}
.FacebookPageInput {
  width: 90%;
  padding-left: 10px;
  border: none;
  height: 24px;
}
.qualificationSpan,
.qualificationPara {
  font-weight: bold;
}
.qualificationPara {
  margin-bottom: 10px;
}
.PhoneFeild {
  margin-bottom: 7px;
}
.chooseFileTxt {
  font-weight: bold;
  background-color: white;
  padding: 5px 35px;
}
.profileBtn {
  background-color: red;
  border: none;
  padding: 10px 40px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 40px;
}
.linkUs {
  margin-top: 130px;
  font-size: 16px;
  /* font-weight: bold; */
  margin-bottom: 10px;
}
.col-8 p {
  float: left;
  font-size: 17px;
}
.profileExampleTxt {
  color: red;
  font-weight: bold;
  position: absolute;
  left: 30%;
  transform: translate(-50%, 0);
}
@media (max-width: 1600px) {
  .profileExampleTxt {
    left: 35%;
  }
}
@media (max-width: 1400px) {
  .profileExampleTxt {
    left: 40%;
  }
}
@media (max-width: 1250px) {
  .profileExampleTxt {
    left: 45%;
  }
}
@media (max-width: 1100px) {
  .profilePic {
    width: 320px;
    padding-top: 180px;
  }
  .profileDiv {
    width: 90%;
    overflow: hidden !important;
  }
  .profileMainDiv {
    background-color: #f9c602;
    width: 100%;
    overflow: hidden !important;
  }
  .profileExampleTxt {
    left: 33%;
  }
}
@media (max-width: 1000px) {
  .profileExampleTxt {
    left: 37%;
  }
}
@media (max-width: 889px) {
  .paddTop h1 {
    font-size: 30px;
  }
  .col-8 p {
    float: right;
  }
  .profileExampleTxt {
    left: 40%;
  }
}
@media (max-width: 800px) {
  .profileExampleTxt {
    left: 42%;
  }
}
@media (max-width: 776px) {
  .profileExampleTxt {
    left: 34%;
  }
}
@media (max-width: 750px) {
  .profilePic {
    width: 250px;
    padding-top: 250px;
  }
  .paddTop h1 {
    font-size: 25px;
  }
}
.profilePicDiv {
  display: none;
}
@media (max-width: 700px) {
  .profileDiv {
    display: none;
  }
  .profilePicDiv {
    display: initial;
  }
  .profilePicture {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 60px;
    width: 400px;
  }
  .medPrfTxt {
    color: red;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 30px;
    font-size: 20px;
  }
}
@media (max-width: 430px) {
  .profilePicture {
    margin-top: 140px;
    width: 380px;
  }
  .medPrfTxt {
    color: red;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 100px;
    font-size: 20px;
    white-space: nowrap;
  }
}
@media (max-width: 400px) {
  .profilePicture {
    margin-top: 140px;
    width: 300px;
  }
}
@media (max-width: 350px) {
  .profilePicture {
    width: 280px;
  }
}
</style>
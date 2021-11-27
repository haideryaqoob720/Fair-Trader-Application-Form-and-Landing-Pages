<template>
  <div class="profileMainDiv">
    <div class="profileDiv">
      <h1 data-aos="fade-right">How to Receive Your Payment</h1>
      <label>Business Name (optional)</label><br />
      <input
        type="text"
        placeholder="Do you have a business or a company?"
        class="BuisInput"
        v-model="buisnessName"
      /><br />
      <label>Business Website (optional)</label><br />
      <input
        type="text"
        placeholder="If you have a website, enter URL here"
        class="BuisInput"
        v-model="buisnessWebsite"
      />

      <div class="row">
        <div class="col-6">
          <label>Upload Photo</label><br />
          <input type="file" class="fileUpload" @change="selectedUserPhoto" />
          <!-- <span class="chooseFileTxt">Please Choose File: </span> -->
        </div>
        <div class="col-6">
          <label>Government Issued ID</label><br />
          <input type="file" class="fileUpload" @change="selectedGoverID" />
        </div>
      </div>
      <label>Your wallet address (optional)</label><br />
      <input
        type="text"
        placeholder="Enter your digital wallet such as Metamask"
        class="BuisInput"
        v-model="walletAddress"
      />
      <h5>
        To Set Up Metamask Wallet
        <a href="https://metamask.io/" target="_blank">CLICK HERE</a>
      </h5>
      <p class="guidReceive">
        <span
          >In order to receive payment you will need to have a digital wallet
          and prove you are a real person.</span
        >
        If you already have a wallet number such as Metamask please provide
        details above or email <a href="">support@FairTrader.io</a> for
        assistance.
      </p>
      <button class="profileBtn" @click="handleSubmit()">Submit</button>
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
import AOS from "aos";
export default {
  name: "mediation",
  data() {
    return {
      buisnessName: "",
      buisnessWebsite: "",
      walletAddress: "",
      selectedPhoto: "",
      selectedGovID: "",
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },
  methods: {
    handleSubmit() {
      if (this.buisnessName === "") {
        this.$toasted.error("Invalid Business Name");
      } else if (this.buisnessWebsite === "") {
        this.$toasted.error("Invalid Business Website");
      } else if (this.walletAddress === "") {
        this.$toasted.error("Invalid Wallet Address");
      } else if (this.selectedPhoto === "") {
        this.$toasted.error("Invalid Photo");
      } else if (this.selectedGovID === "") {
        this.$toasted.error("Invalid Government ID");
      } else {
        console.log(this.buisnessName);
        console.log(this.buisnessWebsite);
        console.log(this.walletAddress);
        console.log(this.selectedPhoto);
        console.log(this.selectedGovID);

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
    selectedUserPhoto(e) {
      this.selectedPhoto = e.target.files[0];
      // console.log(this.istSelectedFileQual);
      this.$toasted.success("File Selected: " + this.selectedPhoto.name);
    },
    selectedGoverID(e) {
      this.selectedGovID = e.target.files[0];
      // console.log(this.sndSelectedFileQual);
      this.$toasted.success("File Selected: " + this.selectedGovID.name);
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
  overflow: hidden;
}
.profileDiv {
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  overflow: hidden;
}

.profileDiv h1 {
  text-align: center;
  font-weight: bold;
  font-family: nunito;
  margin-bottom: 20px;
}
label {
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.BuisInput {
  width: 100%;
  padding-left: 20px;
  height: 30px;
}
.profileDiv h5 {
  color: #096189;
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
}
.profileDiv h5 a {
  text-decoration: underline;
  color: #096189;
}

.guidReceive {
  font-size: 16px;
}
.guidReceive a {
  color: blue;
}
.guidReceive span {
  color: red;
  font-weight: bold;
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
@media (max-width: 1200px) {
  .profileDiv {
    width: 90%;
  }
}
@media (max-width: 540px) {
  .profileDiv h1 {
    font-size: 33px;
  }
}
@media (max-width: 500px) {
  .profileDiv {
    padding-top: 50px;
  }
  .profileDiv h1 {
    font-size: 29px;
  }
  .bottomLinks {
    position: absolute;
    bottom: 5%;
  }
  .col-8 p {
    margin-left: 20px;
  }
  .bottomLinkSec {
    position: relative;
    left: 100px;
  }
}
@media (max-width: 434px) {
  .profileDiv h1 {
    font-size: 27px;
  }
}
@media (max-width: 420px) {
  .bottomLinkSec {
    position: relative;
    left: 50px;
  }
}
@media (max-width: 404px) {
  .profileDiv h1 {
    font-size: 25px;
  }
  .fileUpload {
    font-size: 12px;
  }
  label {
    margin-bottom: 5px;
    font-size: 15px;
  }
}
@media (max-width: 374px) {
  .profileDiv h1 {
    font-size: 25px;
    font-family: Georgia, "Times New Roman", Times, serif;
  }
}
@media (max-width: 367px) {
  .bottomLinkSec {
    position: relative;
    left: 30px;
  }
  .profileDiv h5 {
    font-size: 15px;
  }
}
@media (max-width: 360px) {
  .profileDiv h1 {
    font-size: 23px;
    text-align: start;
  }
}
@media (max-width: 354px) {
  label {
    font-size: 13px;
  }
}
@media (max-width: 344px) {
  .bottomLinkSec {
    left: 20px;
  }
}
@media (max-width: 330px) {
  .profileDiv h1 {
    font-size: 21px;
  }
  .bottomLinkSec {
    left: 10px;
  }
}
</style>
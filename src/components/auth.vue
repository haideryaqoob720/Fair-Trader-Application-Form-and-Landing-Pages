<template>
  <div class="authMainDiv">
    <div class="authDiv">
      <h2 data-aos="zoom-out">Thank you for applying as a Mediator</h2>

      <div class="form" data-aos="zoom-in">
        <h3>Sign In / Sign Up</h3>

        <div class="row">
          <div class="col-6">
            <span class="inputLabel">First Name</span><br />
            <input
              class="inputFeild"
              type="text"
              placeholder="Enter Your Name ..."
            />
          </div>
          <div class="col-6">
            <span class="inputLabel">Last Name</span><br />
            <input
              class="inputFeild"
              type="text"
              placeholder="Enter Your Name ..."
            />
          </div>
        </div>
        <br />
        <span class="inputLabel">Your Email</span><br />
        <input
          class="inputFeild"
          style="width: 98%"
          type="text"
          placeholder="Enter Your Email ..."
        />
        <br />
        <br />
        <span class="inputLabel">Your Password</span><br />
        <input
          class="inputFeild"
          style="width: 98%"
          type="text"
          placeholder="Enter Your password here or create new one ..."
        />

        <a href="/profile"><button class="authBtn">Submit</button></a>
      </div>
      <img
        src="../assets/img/authBottomPic3.png"
        width="200px"
        alt="authBottomPic"
        class="authBottomPic"
      />
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "mediation",
  mounted() {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.authMainDiv {
  background-color: #f9c602;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}
.authDiv {
  width: 50%;
  margin: 0 auto;
}
.authDiv h2 {
  margin-left: -40px;
  padding-top: 140px;
  font-weight: 1000;
  font-size: 40px;
  text-align: center;
  font-family: nunito;
  margin-bottom: 80px;
}
.authDiv h3 {
  font-size: 30px;
  color: red;
  font-weight: bold;
  font-family: nunito;
  margin-bottom: 30px;
}
.inputLabel {
  font-weight: bold;
}
.inputFeild {
  margin-top: 10px;
  width: 95%;
  padding-left: 20px;
  height: 30px;
  font-weight: bold;
  outline: none;
}
.authBtn {
  background-color: red;
  border: none;
  border: 1px solid black;
  color: white;
  font-weight: bold;
  float: right;
  margin-right: 17px;
  padding: 7px 30px;
  margin-top: 30px;
}
.authBottomPic {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0);
}

@media (max-width: 1440px) {
  .authDiv h2 {
    margin-left: 0px;
  }
}
/* @media (max-width: 824px) {
  .authDiv h2 {
    font-size: 34px;
  }
} */
@media (max-width: 850px) {
  .authDiv h2 {
    padding-top: 80px;
    font-size: 40px;
  }
  .inputFeild {
    font-size: 12px;
  }
  .authBottomPic {
    width: 150px;
  }
  .authDiv {
    width: 91%;
  }
}
@media (max-width: 500px) {
  .authDiv h2 {
    font-size: 37px;
  }
  .inputFeild {
    margin-top: 4px;
  }
}
@media (max-width: 419px) {
  .authDiv h2 {
    font-size: 32px;
  }
}
@media (max-width: 363px) {
  .authDiv h2 {
    font-size: 28px;
  }
}
@media (max-width: 317px) {
  .authDiv h2 {
    font-size: 25px;
  }
}
</style>
<template>
  <div class="page">
    <div class="container">
      <section class="header">
        <div class="flex_box logo_box">
          <img class="logo" src="@/assets/logo.png" alt="" />
          <div class="name">3WebDAO</div>
        </div>
        <div class="flex_box nav_box">
          <div class="active">Home</div>
          <router-link to="/research"><div>Research</div></router-link>
          <div>Analytics</div>
          <div>Governence</div>
        </div>
      </section>
      <section>
        <div class="slogan">
          <div>Follow Objective Reports and</div>
          <div class="small">Intelligent On-Chain Data</div>
        </div>
      </section>
      <section>
        <div class="introduce">
          <div class="item">
            <div class="title">About 3WebDAO</div>
            <div>
              3WebDAO is a decentralized blockchain insight platform, which
              combines reserach reports and on-chain data metrics for digital
              asset stakeholders.
            </div>
          </div>
          <div class="item active">
            <div class="title">Why Report？</div>
            <div>
              We found that blockchain is a high threshold industry combining
              technology and finance. 3WebDAO hope to help early users finding
              out blockchain through more professional and objective research
              reports which be stored on Filecoin/IPFS through Web3.storage.
            </div>
          </div>
          <div class="item">
            <div class="title">Why On-Chain？</div>
            <div>
              As early adopters of crypto, we found blockchains are constantly
              generating a wealth of open, incorruptible financial data that
              allows us to access precise, trustworthy measures of relevant
              economic activity in crypto networks.By unlocking this data,
              3WebDAO is changing the way we measure market sentiment and
              behaviour.
            </div>
          </div>
        </div>
        <div class="summary"></div>
      </section>
      <section class="flex_box ability">
        <div class="item">
          <div class="title">Research</div>
          <div>
            professional and objective research reports from 3WebDAO member
          </div>
        </div>
        <div class="item">
          <div class="title">Analytics</div>
          <div>
            The most comprehensive library of advanced on-chain metrics across a
            range of assets.
          </div>
        </div>
      </section>
      <footer class="flex_box">
        <div class="left">
          <div class="flex_box">
            <img class="logo" src="@/assets/logo.png" alt="" />
            <div class="name">3WebDAO</div>
          </div>
        </div>
        <div class="right flex_box">
          <div class="flex_box item">
            <div>Twitter</div>
            <img src="@/assets/twitter.png" alt="" />
          </div>
          <div class="flex_box item">
            <div>Github</div>
            <img src="@/assets/github.png" alt="" />
          </div>
          <div class="flex_box item">
            <div>Telegram</div>
            <img src="@/assets/telegram.png" alt="" />
          </div>
          <div class="flex_box item">
            <div>Email</div>
            <img src="@/assets/email.png" alt="" />
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope lang="scss">
.page {
  background-color: #001321;
  text-align: center;
  min-height: 100vh;
}
.container {
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
    .logo_box {
      align-items: center;
    }
    .logo {
      width: 50px;
    }
    .name {
      font-size: 26px;
      font-weight: bold;
      color: #fff;
      margin-left: 20px;
    }
  }
  .nav_box {
    font-size: 24px;
    color: #fff;
    > div {
      margin: 0 20px;
      position: relative;
    }
    .active::after {
      content: "";
      position: absolute;
      width: 80%;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 2px;
      bottom: -8px;
      background-color: #fff;
    }
  }
  .slogan {
    padding: 250px 0;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    text-align: left;
    .small {
      margin: 50px 0 0 200px;
    }
  }
  .introduce {
    justify-content: space-around;
    text-align: left;
    .item {
      width: 100%;
      color: #fff;
      border-radius: 4px;
      font-size: 24px;
      text-align: left;
      padding: 30px;
      margin: 100px 0;
      line-height: 80px;
    }
    .active {
      background: rgba(211, 219, 226, 0.06);
    }
    .title {
      // text-align: center;
      color: #14caa9;
      font-size: 35px;
      font-weight: bold;
      margin: 0 0 30px 0;
    }
  }
  .summary {
    font-size: 35px;
    color: #fff;
    margin: 300px 0;
  }
  .ability {
    justify-content: space-around;
    margin: 0 0 200px;
    .item {
      width: 40%;
      padding: 100px;
      border-radius: 8px;
      font-size: 24px;
      color: #fff;
      line-height: 40px;
      background: #082235;
    }
    .title {
      color: #fff;
      font-weight: bold;
      margin: 0 0 60px;
      font-size: 45px;
    }
  }
  footer {
    align-items: center;
    color: #fff;
    padding: 40px 0;
    font-size: 18px;
    justify-content: space-between;
    border-top: 1px solid #082235;
    .left {
      align-items: center;
      font-size: 24px;
      img {
        width: 35px;
        height: 35px;
        margin: 0 20px 0;
      }
    }
    .right {
      align-items: center;
      img {
        width: 35px;
        height: 35px;
      }
      .item {
        padding: 0 10px;
        div {
          margin: 0 10px 0 0;
        }
      }
    }
    .flex_box {
      align-items: center;
    }
  }
}
.flex_box {
  display: flex;
}
</style>

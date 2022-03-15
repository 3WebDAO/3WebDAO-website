<script setup>
import { Web3Storage } from "web3.storage";
import setting from "@/setting";
import { ElLoading } from "element-plus";
import { ref, reactive, onMounted } from "vue";

const client = new Web3Storage({ token: setting.token });
const state = reactive({
  list: [],
  loading: false,
  size: 10,
  sizeList: [10, 100, 1000, 10000],
});
onMounted(() => {
  getList();
});
function handleUpload() {
  const element = document.querySelector(".file");
  element.click();
}
async function uploadImg(file) {
  const loadingInstance = ElLoading.service({ fullscreen: true });
  const files = file.currentTarget.files;
  await client.put(files, {
    maxRetries: 3,
  });
  loadingInstance.close();
  await getList();
}
async function getList() {
  state.loading = true;
  const uploadNames = [];
  for await (const item of client.list({ maxResults: state.size })) {
    uploadNames.push(item);
  }
  state.list = uploadNames;
  state.loading = false;
}

// for (const file of files) {
//   console.log(`${file.cid} ${file.name} ${file.size}`);
// }
</script>
<template>
  <div class="page">
    <div class="container">
      <section class="header">
        <div class="flex_box logo_box">
          <img class="logo" src="@/assets/logo.png" alt="" />
          <div class="name">3WebDAO</div>
        </div>
        <div class="flex_box nav_box">
          <router-link to="/"><div>Home</div></router-link>
          <div class="active">Research</div>
          <div>Analytics</div>
          <div>Governence</div>
        </div>
      </section>
      <section>
        <input
          style="display: none"
          type="file"
          @change="uploadImg"
          class="file"
        />
        <div class="flex_box btn_list">
          <el-button type="primary" @click="handleUpload()">Upload</el-button>
          <el-select v-model="state.size" class="m-2" placeholder="Select Size">
            <el-option
              v-for="item in state.sizeList"
              :key="item"
              :label="item"
              @click="getList()"
              :value="item"
            />
          </el-select>
        </div>
        <div>
          <el-table
            :data="state.list"
            stripe
            style="width: 100%; height: 80vh"
            v-loading="state.loading"
          >
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="created" label="created" />
            <el-table-column prop="dagSize" label="dagSize" />
            <el-table-column label="Action">
              <template #default="scope">
                <a
                  :href="'https://dweb.link/ipfs/' + scope.row.cid"
                  target="_blank"
                  size="small"
                  >Download</a
                >
              </template>
            </el-table-column>
          </el-table>
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
.btn_list {
  justify-content: space-between;
  margin-bottom: 20px;
}
::v-deep .el-table__body-wrapper {
  background-color: #011f43;
  border: 0px;
}
</style>

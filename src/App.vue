<template>
  <div class="container">
    <div class="title">
      <h1>Fanke图标</h1>
      <p>基于Vue3封装的图标组件库</p>
    </div>
    <div class="title">
      <h2>安装</h2>
      <p>npm i fanke-icons</p>
    </div>
    <div class="title">
      <h2>按需加载</h2>
      <p>import { accountBookFilled } from 'fanke-icons'</p>
    </div>
    <div class="title">
      <h2>全局引入</h2>
      <p>import fankeIcons from 'fanke-icons'</p>
    </div>
    <div class="title">
      <h2>全局注册</h2>
      <p>app.use(fankeIcons)</p>
    </div>
    <div class="title">
      <h2>图标列表</h2>
    </div>
    <div :class="{ 'icon-list-hd': true, 'fixedCs': isFixed }" ref="hdRef">
      <div class="icon-style">
        <span :class="{ 'active': iconType == 1 }" @click="changeTab(1)">
          <em class="outlined"></em>
          线框<i>风格</i>
        </span>
        <span :class="{ 'active': iconType == 2 }" @click="changeTab(2)">
          <em class="filled"></em>
          实底<i>风格</i>
        </span>
      </div>
      <div class="search">
        <input type="text" placeholder="在此搜索图标，点击图标可复制代码" v-model="keyWords" @input="iptText">
        <div class="search-icon">
          <searchOutlined />
        </div>
      </div>
    </div>
    <div class="icon-list-bd">
      <div class="icon-list-items" v-for="(item, index) in iconList" :key="index + 1">
        <h3>{{ item.name }}</h3>
        <ul>
          <li v-for="(subItem, subIndex) in item.iconLs" :key="subIndex + 1" @click="copy(subItem)">
            <component :is="subItem"></component>
            <span>{{ subItem }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="message" :style="{ top: visible ? '60px' : '-180px', transition: visible ? 'all .5s ease' : '' }">
      <checkCircleFilled />
      <em class="msg-desc">{{ msg }}</em>
      <em>复制成功</em>
    </div>

  </div>
</template>
<script setup>
import {
  orgDirectionList,
  orgTipsList,
  orgEditList,
  orgDataList,
  orgBrandList,
  sysList,
  orgFilledDirectionList,
  orgFilledTipsList,
  orgFilledEditList,
  orgFilledDataList,
  orgFilledBrandList,
  sysFilledList
} from './utils/iconList'
import { ref, onMounted } from 'vue'

const iconType = ref(1)
const iconList = ref([])
const msg = ref('')
const visible = ref(false)
const keyWords = ref('')
const hdRef = ref()
const isFixed = ref(false)

onMounted(() => {
  setIcons()
  let rectTop = hdRef.value.getBoundingClientRect().top
  window.addEventListener('scroll', function (e) {
    if (document.body.scrollTop || document.documentElement.scrollTop >= rectTop) {
      // console.log('111111111')
      isFixed.value = true
    } else {
      isFixed.value = false
    }
  })
})

const changeTab = (num) => {
  iconType.value = num
  setIcons()
}

const setIcons = () => {
  let list = []
  if (iconType.value == 1) {
    list = [{
      name: '方向性图标',
      iconLs: orgDirectionList
    },
    {
      name: '提示建议性图标',
      iconLs: orgTipsList
    },
    {
      name: '编辑类图标',
      iconLs: orgEditList
    },
    {
      name: '数据类图标',
      iconLs: orgDataList
    },
    {
      name: '品牌和标识',
      iconLs: orgBrandList
    },
    {
      name: '网站通用图标',
      iconLs: sysList
    }]
  }

  if (iconType.value == 2) {
    list = [
      {
        name: '方向性图标',
        iconLs: orgFilledDirectionList
      },
      {
        name: '提示建议性图标',
        iconLs: orgFilledTipsList
      },
      {
        name: '编辑类图标',
        iconLs: orgFilledEditList
      },
      {
        name: '数据类图标',
        iconLs: orgFilledDataList
      },
      {
        name: '品牌和标识',
        iconLs: orgFilledBrandList
      },
      {
        name: '网站通用图标',
        iconLs: sysFilledList
      }
    ]
  }
  iconList.value = list
}

const iptText = () => {
  if (!keyWords.value) {
    setIcons()
  } else {
    let list = []
    if (iconType.value == 1) {
      let icon1 = orgDirectionList.filter(item => item.includes(keyWords.value))
      let icon2 = orgTipsList.filter(item => item.includes(keyWords.value))
      let icon3 = orgEditList.filter(item => item.includes(keyWords.value))
      let icon4 = orgDataList.filter(item => item.includes(keyWords.value))
      let icon5 = orgBrandList.filter(item => item.includes(keyWords.value))
      let icon6 = sysList.filter(item => item.includes(keyWords.value))

      if (icon1.length > 0) {
        list.push({
          name: '方向性图标',
          iconLs: icon1
        })
      }

      if (icon2.length > 0) {
        list.push({
          name: '提示建议性图标',
          iconLs: icon2
        })
      }

      if (icon3.length > 0) {
        list.push({
          name: '编辑类图标',
          iconLs: icon3
        })
      }

      if (icon4.length > 0) {
        list.push({
          name: '数据类图标',
          iconLs: icon4
        })
      }

      if (icon5.length > 0) {
        list.push({
          name: '品牌和标识',
          iconLs: icon5
        })
      }

      if (icon6.length > 0) {
        list.push({
          name: '网站通用图标',
          iconLs: icon6
        })
      }

    }

    if (iconType.value == 2) {
      let icon1 = orgFilledDirectionList.filter(item => item.includes(keyWords.value))
      let icon2 = orgFilledTipsList.filter(item => item.includes(keyWords.value))
      let icon3 = orgFilledEditList.filter(item => item.includes(keyWords.value))
      let icon4 = orgFilledDataList.filter(item => item.includes(keyWords.value))
      let icon5 = orgFilledBrandList.filter(item => item.includes(keyWords.value))
      let icon6 = sysFilledList.filter(item => item.includes(keyWords.value))

      if (icon1.length > 0) {
        list.push({
          name: '方向性图标',
          iconLs: icon1
        })
      }

      if (icon2.length > 0) {
        list.push({
          name: '提示建议性图标',
          iconLs: icon2
        })
      }

      if (icon3.length > 0) {
        list.push({
          name: '编辑类图标',
          iconLs: icon3
        })
      }

      if (icon4.length > 0) {
        list.push({
          name: '数据类图标',
          iconLs: icon4
        })
      }

      if (icon5.length > 0) {
        list.push({
          name: '品牌和标识',
          iconLs: icon5
        })
      }

      if (icon6.length > 0) {
        list.push({
          name: '网站通用图标',
          iconLs: icon6
        })
      }

    }
    iconList.value = list
  }
}

const copy = (text) => {
  var textarea = document.createElement('textarea')
  textarea.style.position = 'fixed'
  textarea.style.opacity = 0
  textarea.value = `<${text} />`
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)

  msg.value = `<${text} />`
  visible.value = true

  setTimeout(() => {
    visible.value = false
  }, 3000)

}

</script>
<style scoped>
.container {
  width: 80%;
  margin: 100px auto;
  text-align: left;
}

.container .title {
  margin-bottom: 8px;
  padding-bottom: 8px;
}

.container .title p {
  background-color: #EBEBEB;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 3px;
}

.container .icon-list-hd {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 8px;
  transition: all .5s ease;
}

.container .icon-style {
  width: 216px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #F5F5F5;
}

.container .icon-style span {
  flex: 1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 4px;
  background-color: #F5F5F5;
  transition: all .3s ease;
}

.container .icon-style span.active,
.container .icon-style span:hover {
  background-color: #E7E7E7;
}

.container .search {
  flex: 1;
  margin-left: 30px;
  display: flex;
}

.search input {
  flex: 1;
  padding: 0 10px;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.search input:hover,
.search input:focus {
  border-color: #4096ff;
}

.search-icon {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #d9d9d9;
  border-left: 0;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.search-icon:hover {
  border: 1px solid #4096ff;
}

.filled,
.outlined {
  width: 14px;
  height: 14px;
  border-radius: 2px;
  margin-right: 5px;
}

.outlined {
  border: 1px solid #333;
}

.filled {
  background-color: #333;
}

.icon-list-bd {
  margin-top: 20px;
}

.icon-list-bd h3 {
  font-weight: normal;
}

.icon-list-items {
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.icon-list-items ul {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
}

.icon-list-items ul li {
  width: 16.66%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  transition: all .5s ease;
}

.icon-list-items ul li:hover {
  border-radius: 7px;
  background-color: #4096ff;
}

.icon-list-items ul li span {
  transition: all .5s ease;
}

.icon-list-items ul li:hover span {
  color: #fff;
}

.icon-list-items ul li .fankeicon {
  font-size: 36px;
  transition: all .5s ease;
}

.icon-list-items ul li:hover .fankeicon {
  color: #fff;
  transform: scale(1.2);
}

.message {
  position: fixed;
  top: -180px;
  left: 50%;
  background-color: #fff;
  border-radius: 5px;
  transform: translateX(-50%);
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  z-index: 99;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .1);
}

.message .fankeicon {
  color: #01CC00;
  display: inline-block;
  vertical-align: middle;
}

.message em {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
}

.container .fixedCs {
  position: fixed;
  top: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
  z-index: 98;
}

@media (max-width: 768px) {

  .container .fixedCs,
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .icon-list-items ul li {
    width: 50%;
    overflow: hidden;
  }

  .container .title h1 {
    font-size: 24px;
  }

  .container .title h2 {
    font-size: 20px;
  }

  .icon-list-bd h3 {
    font-size: 16px;
  }

  .icon-list-items ul li span,
  .container .title p {
    font-size: 13px;
  }

  .icon-list-items ul li .fankeicon {
    font-size: 24px;
  }

  .container .icon-style span i {
    display: none;
  }

  .container .search {
    margin-left: 8px;
  }

  .container .icon-list-hd {
    padding: 5px;
  }

  .message .msg-desc {
    display: none;
  }
}

@media (min-width: 769px) {
  .icon-list-items ul li {
    width: 33%;
  }

  .container .fixedCs,
  .container {
    width: 90%;
  }
}

@media (min-width: 992px) {
  .icon-list-items ul li {
    width: 25%;
  }

  .container .fixedCs,
  .container {
    width: 900px;
  }
}

@media (min-width: 1200px) {
  .icon-list-items ul li {
    width: 20%;
  }

  .container .fixedCs,
  .container {
    width: 1150px;
  }
}

@media (min-width: 1600px) {
  .icon-list-items ul li {
    width: 16.66%;
  }

  .container .fixedCs,
  .container {
    width: 1280px;
  }
}
</style>

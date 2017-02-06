<template>
  <el-row :gutter="10">
    <el-col :span="6">
      <Elements />
      <el-select v-model="selectPage" @change="load()">
        <el-option
          v-for="option in pageList()"
          :label="option"
          :value="option">
        </el-option>
      </el-select>
      <el-button @click="newPage()">New</el-button>
      <el-button @click="save()">Save</el-button>
      <el-button @click="remove()">Remove</el-button>
    </el-col>
    <el-col :span="12">

      <MainCanvas />
    </el-col>
    <el-col :span="6">
      <Properties />
    </el-col>
  </el-row>
</template>
<script>
import Elements from 'components/Elements'
import MainCanvas from 'components/MainCanvas'
import Properties from 'components/Properties'
const localStorage = window.localStorage
export default {
  name: 'app',
  components: {
    Elements,
    MainCanvas,
    Properties
  },
  data () {
    return {
      pageName: '',
      selectPage: ''
    }
  },
  methods: {
    pageList () {
      var pageList = localStorage.getItem('pageList')
      pageList = JSON.parse(pageList)
      return pageList || []
    },
    save () {
      if (this.selectPage !== '') {
        var pageList = this.pageList()
        if (pageList.indexOf(this.selectPage) === -1) {
          pageList.push(this.selectPage)
        }
        window.localStorage.setItem('pageList', JSON.stringify(pageList))
        window.localStorage.setItem(this.selectPage, JSON.stringify(this.$store.state.elements))
      }
    },
    load () {
      var page = localStorage.getItem(this.selectPage)
      if (page) {
        page = JSON.parse(page)
        this.$store.dispatch('setElements', page)
      }
    },
    newPage () {
      this.$prompt('请页面名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.selectPage = value
        this.save()
      })
    },
    remove () {
      var pageList = this.pageList().filter(page => page !== this.selectPage)
      window.localStorage.setItem('pageList', JSON.stringify(pageList))
      window.localStorage.removeItem(this.selectPage)
      this.selectPage = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

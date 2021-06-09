<!--<template>-->
<!--  <div class="product-version-container">-->
<!--    <div class="notice" v-if="moduleVersion.length === 0 && moduleVersions.length === 0">-->
<!--      <p class="notice-title">暂无数据</p>-->
<!--    </div>-->
<!--    <div v-else class="version-container">-->
<!--        <div class="soft-download-filter content-left-filter">-->
<!--          <el-form :inline="true">-->
<!--            <el-form-item label="主线版本">-->
<!--              <el-select-->
<!--                  size="mini"-->
<!--                  filterable-->
<!--                  v-model="selectedVersion.selectMainlineVersion"-->
<!--                  clearable-->
<!--                  @clear="clearVersion"-->
<!--                  @change="selectMainlineVersion"-->
<!--                  placeholder="按类型筛选"-->
<!--              >-->
<!--                <el-option-->
<!--                    v-for="item in moduleVersions.flat().filter(res => res.type === 4)"-->
<!--                    :label="item.versionNum + ' (' + item.name + ')'"-->
<!--                    :value="item.id"-->
<!--                    :key="item.id"-->
<!--                >-->
<!--                </el-option>-->
<!--              </el-select>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="版本号">-->
<!--              <el-select-->
<!--                  filterable-->
<!--                  clearable-->
<!--                  @clear="clearVersion"-->
<!--                  size="mini"-->
<!--                  v-model="selectedVersion.selectVersion"-->
<!--                  remote-->
<!--                  :remote-method="getVersion"-->
<!--                  @change="selectVersion"-->
<!--                  placeholder="请输入版本号">-->
<!--                <el-option-->
<!--                    v-for="item in versionRes"-->
<!--                    :label="item.versionNum + ' (' +item.name + ')'"-->
<!--                    :value="item.id"-->
<!--                    :key="item.id">-->
<!--                </el-option>-->
<!--              </el-select>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--        </div>-->
<!--    </div>-->

<!--&lt;!&ndash; 搜索模块 &ndash;&gt;-->
<!--    <div v-if="mainlineVersionsTree.length > 0">-->
<!--      <div class="module-header"><span class="title">{{mainlineVersionsTree[0].module.name}}</span></div>-->
<!--      <VersionTable @click="click" :table-data="mainlineVersionsTree" :high-light-fields="mainlineVersionHighLightFields"></VersionTable>-->
<!--    </div>-->

<!--    <div v-else-if="selectedVersion.selectVersion != null">-->
<!--      <div v-if="showTableVersion">-->
<!--        <div class="module-header"><span class="title">{{showTableVersionData[0].module.name}}</span></div>-->
<!--        <VersionTable @click="click" :table-data="this.showTableVersionData" :high-light-fields="allVersionHighLightFields"></VersionTable>-->
<!--      </div>-->
<!--      <div v-else>-->
<!--        <div class="module-content">-->
<!--          <div class="module-version" @click="clickVersion(otherVersion.module, otherVersion)">-->
<!--            <p class="version-title" >{{otherVersion.versionNum}}</p>-->
<!--            <span class="version-sub-title">版本概述: {{otherVersion.description}}</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--&lt;!&ndash;  初始模块  &ndash;&gt;-->
<!--    <div v-else v-for="(module, index) in moduleVersion" :key="index" class="module" >-->
<!--      <div v-bind:class="{marginRight:index===0||index%2===0}">-->
<!--          <div class="module-header"><span class="title">{{moduleName(module)}}</span></div>-->
<!--        <div v-show="moduleVersions[index] != null">-->
<!--          <VersionTable @click="click" :table-data="moduleVersions[index]"></VersionTable>-->
<!--        </div>-->
<!--          <div class="module-header" style="margin-top: 10px;"><span class="title">其他</span></div>-->
<!--          <div class="module-content">-->
<!--            <div v-for="(version,idx) in module.versions" :key="idx+110002" class="module-version"-->
<!--                 @click="clickVersion(module,version)">-->
<!--              <p class="version-title">{{version.versionNum}}</p>-->
<!--              <span class="version-sub-title">版本概述: {{version.description}}</span>-->
<!--            </div>-->
<!--            <div v-if="module.versions.length===0" class="notice">-->
<!--              <p  style="margin-top:30px;">暂无其他版本数据</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="module-footer">-->
<!--            <el-pagination background layout="prev, pager, next" hide-on-single-page :current-page="module.page"-->
<!--                           :page-size="pageSizeLimit" :total="module.total" @current-change="currentChange($event,module)">-->
<!--            </el-pagination>-->
<!--          </div>-->
<!--      </div>-->
<!--    </div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import { get } from 'vuex-pathify'-->
<!--import { size } from '@/utils/common'-->
<!--import VersionTable from './VersionTable'-->
<!--import request from './request'-->

<!--export default {-->
<!--  name: 'ProductVersion',-->
<!--  components: {-->
<!--    VersionTable-->
<!--  },-->
<!--  props: {-->
<!--    productId: {-->
<!--      type: Number-->
<!--    },-->
<!--    productName: {-->
<!--      type: String-->
<!--    }-->
<!--  },-->
<!--  created () {-->
<!--    this.selectedVersion.selectVersion = null-->
<!--  },-->
<!--  watch: {-->
<!--    productId: {-->
<!--      handler: function (val, oldval) {-->
<!--        this.$store.dispatch('getModuleVersion', {-->
<!--          product: val,-->
<!--          p: 1,-->
<!--          n: 5-->
<!--        })-->
<!--        this.$store.dispatch('getModuleVersions', {-->
<!--          productId: val-->
<!--        })-->
<!--      },-->
<!--      immediate: true-->
<!--    }-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      selectedVersion: {-->
<!--        selectMainlineVersion: '',-->
<!--        selectVersion: ''-->
<!--      },-->
<!--      mainlineVersionHighLightFields: '',-->
<!--      data: [],-->
<!--      versionRes: [],-->
<!--      mainlineVersionsTree: [], // 选择主线版本搜索-->
<!--      versionType: {-->
<!--        1: '标准版本',-->
<!--        2: '受控版本',-->
<!--        3: '测试版本',-->
<!--        4: '主线版本',-->
<!--        5: '特性版本',-->
<!--        6: '定制版本',-->
<!--        7: '补丁版本'-->
<!--      },-->
<!--      choicedModule: null,-->
<!--      dialogTableVisible: false,-->
<!--      choicedVersion: {-->
<!--        'name': '50.0.01',-->
<!--        'product': '新一代威胁感知系统',-->
<!--        'version': '50.0.01',-->
<!--        'version_name': '国产化定制版本',-->
<!--        'version_type': '标准版本',-->
<!--        'support_module': ['NIPM2301', 'NIPM2301', 'NIPM2301'],-->
<!--        'description': '版本概述,此版本修复若干bug',-->
<!--        'software': [-->
<!--          { 'name': '5.4.000全量升级包', 'type': '发布包', 'update_type': '全量', 'support_platform': 'windows', 'md5': 'awdherfoseifdawd' }-->
<!--        ],-->
<!--        'document': [-->
<!--          { 'name': '5.5.4.版本', 'type': ['使用手册'] }-->
<!--        ]-->
<!--      },-->
<!--      dialogVisible: false,-->
<!--      pageSizeLimit: 5,-->
<!--      showTableVersion: false,-->
<!--      showTableVersionData: [],-->
<!--      allVersionHighLightFields: '',-->
<!--      otherVersion: {},-->
<!--      currentVersion: {}-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    productModules: get('productModules'),-->
<!--    currentProduct: get('currentProduct'),-->
<!--    versionFile: get('versionFile'),-->
<!--    moduleVersion: get('moduleVersion'),-->
<!--    moduleVersions: get('moduleVersions'),-->
<!--    moduleName: function () {-->
<!--      return module => {-->
<!--        if (module) {-->
<!--          if (module.parent === 0) {-->
<!--            return module.name-->
<!--          }-->
<!--          return module.name-->
<!--        }-->
<!--        return 'null'-->
<!--      }-->
<!--    },-->
<!--    transToStr: function () {-->
<!--      return array => {-->
<!--        let str = ''-->
<!--        if (array) {-->
<!--          array.forEach((item, index) => {-->
<!--            if (index === (array.lengt - 1)) {-->
<!--              str += item-->
<!--            } else {-->
<!--              str += (item + ',')-->
<!--            }-->
<!--          })-->
<!--        }-->
<!--        return str-->
<!--      }-->
<!--    },-->
<!--    softTypes: get('softTypes'),-->
<!--    list: function () {-->
<!--      let data = this.$attrs.list || []-->
<!--      let reg = new RegExp(this.keyword, 'g')-->

<!--      return data.map(item => {-->
<!--        item.size = size(item.file_size)-->
<!--        if (this.keyword) {-->
<!--          item.html_name = item.name.replace(reg, function (match) {-->
<!--            return `<strong class="match-keyword">${match}</strong>`-->
<!--          })-->
<!--        }-->
<!--        return item-->
<!--      })-->
<!--    },-->
<!--    keyword: function () {-->
<!--      return this.$attrs.keyword || ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->

<!--    /**-->
<!--     * 筛选主线版本的操作-->
<!--     * value为当前选中的id值-->
<!--     * value为null代表清空选项-->
<!--     * @param value-->
<!--     */-->
<!--    selectMainlineVersion (value) {-->
<!--      // 选择主线版本时 将另一个选择框清空-->
<!--      this.selectedVersion.selectVersion = null-->
<!--      this.showTableVersionData = []-->
<!--      request.getModuleVersionsTree(value).then(res => {-->
<!--        if (res.code === 2000 && res.data != null) {-->
<!--          this.mainlineVersionsTree = res.data-->
<!--          let _mainlineVersionsTree = JSON.parse(JSON.stringify(this.mainlineVersionsTree))-->
<!--          this.mainlineVersionHighLightFields = this.treeToList(_mainlineVersionsTree).filter(res => res.id === value)[0].name-->
<!--        }-->
<!--      })-->
<!--    },-->

<!--    /**-->
<!--     * 筛选所有版本-->
<!--     * @param value-->
<!--     */-->
<!--    selectVersion (value) {-->
<!--      if (value != null && value !== '') {-->
<!--        this.mainlineVersionsTree = []-->
<!--        this.selectedVersion.selectMainlineVersion = null-->
<!--        let _moduleVersions = JSON.parse(JSON.stringify(this.moduleVersions))-->
<!--        let res = this.treeToList(_moduleVersions).filter(res => res.id === value)-->
<!--        if (res.length > 0) {-->
<!--          // 展示表格数据-->
<!--          request.getModuleVersionsTree(value).then(res => {-->
<!--            if (res.code === 2000 && res.data != null) {-->
<!--              this.showTableVersionData = res.data-->
<!--              this.showTableVersion = true-->
<!--              let _showTableVersionData = JSON.parse(JSON.stringify(this.showTableVersionData))-->
<!--              this.allVersionHighLightFields = this.treeToList(_showTableVersionData).filter(res => res.id === value)[0].name-->
<!--            }-->
<!--          })-->
<!--          return-->
<!--        }-->
<!--        this.showTableVersion = false-->
<!--        // 展示其他版本类型-->
<!--        request.getOtherVersions(value).then(res => {-->
<!--          if (res.code === 2000) {-->
<!--            this.otherVersion = res.data-->
<!--          }-->
<!--        })-->
<!--      }-->
<!--    },-->

<!--    /**-->
<!--     * 点击清空按钮回显所有数据-->
<!--     */-->
<!--    clearVersion () {-->
<!--      this.showTableVersion = false-->
<!--      let productId = this.productId-->
<!--      this.$store.dispatch('getModuleVersion', {-->
<!--        product: productId,-->
<!--        p: 1,-->
<!--        n: 5-->
<!--      })-->
<!--      this.$store.dispatch('getModuleVersions', {-->
<!--        productId: productId-->
<!--      })-->
<!--      this.mainlineVersionsTree = []-->
<!--      this.selectedVersion.selectVersion = null-->
<!--      this.showTableVersionData = []-->
<!--    },-->

<!--    /**-->
<!--     * 远程模糊搜索-->
<!--     */-->
<!--    getVersion: async function (name) {-->
<!--      let params = { 'name': name, 'page': 1, 'pageSize': 50, 'productId': this.productId }-->
<!--      request.getVersions(params).then(res => {-->
<!--        if (res.code === 2000) {-->
<!--          this.versionRes = res.data.items-->
<!--        }-->
<!--      })-->
<!--    },-->

<!--    /**-->
<!--     * 将嵌套的数组展平为一维数组-->
<!--     */-->
<!--    treeToList (trees) {-->
<!--      let all = []-->
<!--      if (trees !== undefined && trees.length > 0) {-->
<!--        for (let i = 0; i < trees.length; i++) {-->
<!--          let queen = []-->
<!--          queen = queen.concat(trees[i])-->
<!--          while (queen.length) {-->
<!--            let first = queen.shift()-->
<!--            if (first.children) {-->
<!--              queen = queen.concat(first.children)-->
<!--              delete first['children']-->
<!--            }-->
<!--            all.push(first)-->
<!--          }-->
<!--        }-->
<!--        return all-->
<!--      }-->
<!--      return []-->
<!--    },-->

<!--    /**-->
<!--     * 处理子组件向父组件传递的点击时间点-->
<!--     * @param value-->
<!--     */-->
<!--    click (value) {-->
<!--      this.clickVersion(value.module, value.version)-->
<!--      let res = JSON.parse(JSON.stringify(this.moduleVersions))-->
<!--      this.currentVersion = this.treeToList(res).filter(res => {-->
<!--        // eslint-disable-next-line no-return-assign-->
<!--        return res.module.id = value.module.id-->
<!--      })[0]-->
<!--    },-->
<!--    handleDownload (scope) {-->
<!--      let address = scope.download_flag-->
<!--      if (window.localStorage.getItem('token') && window.localStorage.getItem('token').length > 0) {-->
<!--        address = address + '?token=' + window.localStorage.getItem('token')-->
<!--        address = address.replace('http:', 'https:')-->
<!--      }-->
<!--      window.open(address)-->
<!--    },-->
<!--    getProductInfo (id) {-->
<!--      this.dialogVisible = true-->
<!--      this.$store.dispatch('getProductInfo', {-->
<!--        file: id-->
<!--      })-->
<!--    },-->
<!--    supportPlatform (scope) {-->
<!--      if (scope) {-->
<!--        if (scope.support_platform === 1) {-->
<!--          return 'Windows'-->
<!--        } else if (scope.support_platform === 2) {-->
<!--          return 'Linux'-->
<!--        } else if (scope.support_platform === 3) {-->
<!--          return '通用'-->
<!--        } else {-->
<!--          return '其他'-->
<!--        }-->
<!--      }-->
<!--      return scope-->
<!--    },-->
<!--    updateType (scope) {-->
<!--      if (scope) {-->
<!--        if (scope.update_type === 1) {-->
<!--          return '增量'-->
<!--        } else {-->
<!--          return '全量'-->
<!--        }-->
<!--      }-->
<!--      return scope-->
<!--    },-->
<!--    clickVersion (module, version) {-->
<!--      // this.choicedVersion = version-->
<!--      this.dialogTableVisible = true-->
<!--      this.$store.dispatch('getVersionFile', {-->
<!--        version: version.id,-->
<!--        product: this.productId,-->
<!--        module: module.id-->
<!--      })-->
<!--      this.choicedModule = module-->
<!--    },-->
<!--    currentChange (page, module) {-->
<!--      this.$store.dispatch('getModuleVersion', {-->
<!--        product: this.productId,-->
<!--        p: page,-->
<!--        n: 5,-->
<!--        module: module.id-->
<!--      })-->
<!--    },-->
<!--    type (id) {-->
<!--      let filter = this.softTypes.filter(item => {-->
<!--        return item.id === id-->
<!--      })-->
<!--      return filter.length ? filter[0].label : '-'-->
<!--    },-->
<!--    getVersionDesc (item) {-->
<!--      if (item.version && item.version.module_version && item.version.module_version.description) {-->
<!--        return item.version.module_version.description-->
<!--      } else if (item.version && item.version.product_version && item.version.product_version.description) {-->
<!--        return item.version.product_version.description-->
<!--      } else {-->
<!--        return '-'-->
<!--      }-->
<!--    },-->
<!--    getVersionModuleName (module) {-->
<!--      for (var i = 0; i < this.moduleVersion.length; i++) {-->
<!--        if (module === this.moduleVersion[i].id) {-->
<!--          if (this.moduleVersion[i].parent === 0) {-->
<!--            return this.moduleVersion[i].name-->
<!--          } else {-->
<!--            return this.moduleVersion[i].name-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
<!--.cursor-pointer {-->
<!--  cursor: pointer;-->
<!--}-->
<!--.notice {-->
<!--  text-align: center;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--.notice-title{-->
<!--  margin-top:100px;-->
<!--}-->

<!--.dialog-container {-->
<!--  margin-top: -40px;-->
<!--}-->
<!--.dialog-title {-->
<!--  color: #555;-->
<!--  font-weight: 550;-->
<!--  font-size: 14px;-->
<!--}-->
<!--.dialog-field-right {-->
<!--  margin-left: 4px;-->
<!--}-->
<!--.dialog-field {-->
<!--  display: block;-->
<!--  margin-bottom: 12px;-->
<!--}-->
<!--.version-container {-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--  flex-wrap: wrap;-->
<!--  margin-bottom: 20px;-->
<!--}-->
<!--.product-version-container {-->
<!--  flex-direction: row;-->
<!--  flex-wrap: wrap;-->
<!--  .module {-->
<!--    margin-top: 20px;-->
<!--    border-radius: 4px;-->
<!--    // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),-->
<!--    //   0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;-->
<!--    border: 1px solid #eee;-->
<!--    width: 100%;-->
<!--    flex-direction: column;-->
<!--  }-->

<!--  .module-header {-->
<!--    padding: 8px;-->
<!--    height: 20px;-->
<!--    background-color: #eee;-->
<!--    .title {-->
<!--      color: #555;-->
<!--      font-size: 15px;-->
<!--      font-weight: 550;-->
<!--    }-->
<!--  }-->
<!--  .module-content {-->
<!--    cursor: pointer;-->
<!--    padding: 6px;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    .module-version {-->
<!--      padding: 6px;-->
<!--      border-bottom: 1px #eee solid;-->
<!--      .version-title {-->
<!--        color: #008dff;-->
<!--        font-size: 14px;-->
<!--        font-weight: 550;-->
<!--        margin-bottom: 8px;-->
<!--      }-->
<!--      .version-sub-title {-->
<!--        color: #555;-->
<!--        display: inline-block;-->
<!--        margin-bottom: 10px;-->
<!--      }-->
<!--      .version-bottom-line {-->
<!--        text-align: right;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  .module-footer {-->
<!--    text-align: right;-->
<!--    width: 100%;-->
<!--    margin-top: 10px;-->
<!--    margin-bottom: 10px;-->
<!--  }-->
<!--  .marginRight {-->
<!--    margin-right: 20px;-->
<!--  }-->
<!--}-->
<!--</style>-->

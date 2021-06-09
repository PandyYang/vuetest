<template>
  <div class="product-version-container">
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
<!--        </div>s-->
<!--      </div>-->
<!--    </div>-->
<!--  初始模块  -->
    <div v-for="(modules, x) in products" :key="x">
      <div class="module-header"><span class="title">模块{{x}}</span></div>
      <VersionTable @click="click" :table-datas="modules"></VersionTable>
    </div>
</div>
</template>

<script>
import VersionTable from './VersionTable'

export default {
  name: 'ProductVersion2',
  components: {
    VersionTable
  },
  props: {
    productId: {
      type: Number
    },
    productName: {
      type: String
    }
  },
  created () {
    this.selectedVersion.selectVersion = null
  },
  data () {
    return {
      products: [
        [
          [
            {
              "id": 245,
              "names": "V01R22F000C89",
              "versionNum": "12312312",
              "description": "测试一下啊",
              "creatorName": "杨攀迪",
              "createdAt": "2021-05-19 09:27:38",
              "updatedAt": "2021-06-04 18:17:02",
              "deletedAt": null,
              "type": 6,
              "versionCategory": "customize",
              "releaseTime": "2021-05-06 00:00:00",
              "versionStage": "TEST",
              "customerId": 88,
              "customerName": "测试一下",
              "productNameEn": null,
              "moduleNameEn": null,
              "v": "01",
              "r": "22",
              "f": "000",
              "c": "89",
              "patchType": null,
              "patchNo": null,
              "refVersion": 244,
              "module": {
                "id": 293,
                "order": 0,
                "name": "ypd测试2",
                "description": "",
                "parent": null,
                "creatorName": "杨攀迪",
                "createdAt": "2021-04-21 22:07:49",
                "updatedAt": "2021-04-21 22:07:49",
                "deletedAt": null,
                "product": 936,
                "nameEn": null,
                "child": null
              },
              "name": "V01R22F000C89",
              "children": []
            },
            {
              "id": 244,
              "names": "V01R02F000C00",
              "versionNum": "测试啊",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-05-19 09:27:27",
              "updatedAt": "2021-06-04 18:14:29",
              "deletedAt": null,
              "type": 4,
              "versionCategory": "mainline",
              "releaseTime": "2021-05-06 00:00:00",
              "versionStage": "TEST",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": null,
              "v": "01",
              "r": "02",
              "f": "000",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": null,
              "module": {
                "id": 293,
                "order": 0,
                "name": "ypd测试2",
                "description": "",
                "parent": null,
                "creatorName": "杨攀迪",
                "createdAt": "2021-04-21 22:07:49",
                "updatedAt": "2021-04-21 22:07:49",
                "deletedAt": null,
                "product": 936,
                "nameEn": null,
                "child": null
              },
              "name": "V01R02F000C00",
              "children": [
                {
                  "id": 293,
                  "names": "补丁版本啊",
                  "versionNum": "测试创建补丁版本",
                  "description": "",
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-06-04 19:02:31",
                  "updatedAt": "2021-06-04 19:02:31",
                  "deletedAt": null,
                  "type": 7,
                  "versionCategory": "patch",
                  "releaseTime": "2021-06-02 00:00:00",
                  "versionStage": "GA",
                  "customerId": null,
                  "customerName": null,
                  "productNameEn": null,
                  "moduleNameEn": null,
                  "v": "01",
                  "r": "02",
                  "f": "000",
                  "c": "00",
                  "patchType": "sp",
                  "patchNo": "88",
                  "refVersion": 244,
                  "module": {
                    "id": 293,
                    "order": 0,
                    "name": "ypd测试2",
                    "description": "",
                    "parent": null,
                    "creatorName": "杨攀迪",
                    "createdAt": "2021-04-21 22:07:49",
                    "updatedAt": "2021-04-21 22:07:49",
                    "deletedAt": null,
                    "product": 936,
                    "nameEn": null,
                    "child": null
                  },
                  "name": "V01R02F000C00",
                  "children": []
                }
              ]
            }
          ],
          [
            {
              "id": 260,
              "names": "",
              "versionNum": "测试特性版本增加",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-05-27 17:44:00",
              "updatedAt": "2021-05-27 17:44:00",
              "deletedAt": null,
              "type": 5,
              "versionCategory": "feature",
              "releaseTime": "2021-04-30 00:00:00",
              "versionStage": "TEST",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": null,
              "v": "00",
              "r": "66",
              "f": "122",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": 246,
              "module": {
                "id": 293,
                "order": 0,
                "name": "ypd测试2",
                "description": "",
                "parent": null,
                "creatorName": "杨攀迪",
                "createdAt": "2021-04-21 22:07:49",
                "updatedAt": "2021-04-21 22:07:49",
                "deletedAt": null,
                "product": 936,
                "nameEn": null,
                "child": null
              },
              "name": "V00R66F122C00",
              "children": [
                {
                  "id": 271,
                  "names": "V01R22F124C00",
                  "versionNum": "测试一下创建补丁版本",
                  "description": "",
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-06-01 11:27:29",
                  "updatedAt": "2021-06-04 19:03:49",
                  "deletedAt": null,
                  "type": 7,
                  "versionCategory": "patch",
                  "releaseTime": "2021-06-09 00:00:00",
                  "versionStage": "TEST",
                  "customerId": null,
                  "customerName": null,
                  "productNameEn": null,
                  "moduleNameEn": null,
                  "v": "00",
                  "r": "66",
                  "f": "122",
                  "c": "00",
                  "patchType": "sp",
                  "patchNo": "11",
                  "refVersion": 260,
                  "module": {
                    "id": 293,
                    "order": 0,
                    "name": "ypd测试2",
                    "description": "",
                    "parent": null,
                    "creatorName": "杨攀迪",
                    "createdAt": "2021-04-21 22:07:49",
                    "updatedAt": "2021-04-21 22:07:49",
                    "deletedAt": null,
                    "product": 936,
                    "nameEn": null,
                    "child": null
                  },
                  "name": "V00R66F122C00",
                  "children": []
                }
              ]
            },
            {
              "id": 246,
              "names": "V00R66F000C00",
              "versionNum": "测啊",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-05-19 09:32:47",
              "updatedAt": "2021-06-04 18:14:31",
              "deletedAt": null,
              "type": 4,
              "versionCategory": "mainline",
              "releaseTime": "2021-05-05 00:00:00",
              "versionStage": "TEST",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": null,
              "v": "00",
              "r": "66",
              "f": "000",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": null,
              "module": {
                "id": 293,
                "order": 0,
                "name": "ypd测试2",
                "description": "",
                "parent": null,
                "creatorName": "杨攀迪",
                "createdAt": "2021-04-21 22:07:49",
                "updatedAt": "2021-04-21 22:07:49",
                "deletedAt": null,
                "product": 936,
                "nameEn": null,
                "child": null
              },
              "name": "V00R66F000C00",
              "children": []
            }
          ],
          [
            {
              "id": 247,
              "names": "V01R22F000C89",
              "versionNum": "`21321312",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-05-19 09:32:59",
              "updatedAt": "2021-06-04 18:34:04",
              "deletedAt": null,
              "type": 6,
              "versionCategory": "customize",
              "releaseTime": "2021-05-13 00:00:00",
              "versionStage": "RC",
              "customerId": 88,
              "customerName": "测试一下",
              "productNameEn": null,
              "moduleNameEn": null,
              "v": "01",
              "r": "22",
              "f": "000",
              "c": "89",
              "patchType": null,
              "patchNo": null,
              "refVersion": 259,
              "module": {
                "id": 293,
                "order": 0,
                "name": "ypd测试2",
                "description": "",
                "parent": null,
                "creatorName": "杨攀迪",
                "createdAt": "2021-04-21 22:07:49",
                "updatedAt": "2021-04-21 22:07:49",
                "deletedAt": null,
                "product": 936,
                "nameEn": null,
                "child": null
              },
              "name": "V01R22F000C89",
              "children": []
            },
            {
              "id": 261,
              "names": "",
              "versionNum": "测试特性版本2",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-05-27 17:44:24",
              "updatedAt": "2021-05-27 17:44:24",
              "deletedAt": null,
              "type": 5,
              "versionCategory": "feature",
              "releaseTime": "2021-05-05 00:00:00",
              "versionStage": "GA",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": null,
              "v": "01",
              "r": "22",
              "f": "124",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": 259,
              "module": {
                "id": 293,
                "order": 0,
                "name": "ypd测试2",
                "description": "",
                "parent": null,
                "creatorName": "杨攀迪",
                "createdAt": "2021-04-21 22:07:49",
                "updatedAt": "2021-04-21 22:07:49",
                "deletedAt": null,
                "product": 936,
                "nameEn": null,
                "child": null
              },
              "name": "V01R22F124C00",
              "children": []
            },
            {
              "id": 259,
              "names": "",
              "versionNum": "测试主线版本2",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-05-27 17:43:41",
              "updatedAt": "2021-05-27 17:43:41",
              "deletedAt": null,
              "type": 4,
              "versionCategory": "mainline",
              "releaseTime": "2021-05-06 00:00:00",
              "versionStage": "TEST",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": null,
              "v": "01",
              "r": "22",
              "f": "000",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": null,
              "module": {
                "id": 293,
                "order": 0,
                "name": "ypd测试2",
                "description": "",
                "parent": null,
                "creatorName": "杨攀迪",
                "createdAt": "2021-04-21 22:07:49",
                "updatedAt": "2021-04-21 22:07:49",
                "deletedAt": null,
                "product": 936,
                "nameEn": null,
                "child": null
              },
              "name": "V01R22F000C00",
              "children": [
                {
                  "id": 262,
                  "names": "",
                  "versionNum": "测试补丁版本啊",
                  "description": "",
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-05-27 17:44:43",
                  "updatedAt": "2021-05-27 17:44:43",
                  "deletedAt": null,
                  "type": 7,
                  "versionCategory": "patch",
                  "releaseTime": "2021-05-05 00:00:00",
                  "versionStage": "TEST",
                  "customerId": null,
                  "customerName": null,
                  "productNameEn": null,
                  "moduleNameEn": null,
                  "v": "01",
                  "r": "22",
                  "f": "000",
                  "c": "00",
                  "patchType": "hp",
                  "patchNo": "123",
                  "refVersion": 259,
                  "module": {
                    "id": 293,
                    "order": 0,
                    "name": "ypd测试2",
                    "description": "",
                    "parent": null,
                    "creatorName": "杨攀迪",
                    "createdAt": "2021-04-21 22:07:49",
                    "updatedAt": "2021-04-21 22:07:49",
                    "deletedAt": null,
                    "product": 936,
                    "nameEn": null,
                    "child": null
                  },
                  "name": "V01R22F000C00",
                  "children": []
                },
                {
                  "id": 272,
                  "names": "",
                  "versionNum": "测试创建补丁版本啊啊",
                  "description": "",
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-06-01 11:27:46",
                  "updatedAt": "2021-06-01 11:27:46",
                  "deletedAt": null,
                  "type": 7,
                  "versionCategory": "patch",
                  "releaseTime": "2021-06-09 00:00:00",
                  "versionStage": "RC",
                  "customerId": null,
                  "customerName": null,
                  "productNameEn": null,
                  "moduleNameEn": null,
                  "v": "01",
                  "r": "22",
                  "f": "000",
                  "c": "00",
                  "patchType": "sp",
                  "patchNo": "22",
                  "refVersion": 259,
                  "module": {
                    "id": 293,
                    "order": 0,
                    "name": "ypd测试2",
                    "description": "",
                    "parent": null,
                    "creatorName": "杨攀迪",
                    "createdAt": "2021-04-21 22:07:49",
                    "updatedAt": "2021-04-21 22:07:49",
                    "deletedAt": null,
                    "product": 936,
                    "nameEn": null,
                    "child": null
                  },
                  "name": "V01R22F000C00",
                  "children": []
                }
              ]
            }
          ]
        ],
        [
          [
            {
              "id": 265,
              "names": "",
              "versionNum": "测试增加特性版本8",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-06-01 10:57:57",
              "updatedAt": "2021-06-01 10:57:57",
              "deletedAt": null,
              "type": 5,
              "versionCategory": "feature",
              "releaseTime": "2021-06-02 00:00:00",
              "versionStage": "TEST",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": "testoneok",
              "v": "10",
              "r": "00",
              "f": "022",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": 264,
              "module": {
                "id": 329,
                "order": 1,
                "name": "测试模块11111",
                "description": "",
                "parent": {
                  "id": 293,
                  "order": 0,
                  "name": "ypd测试2",
                  "description": "",
                  "parent": null,
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-04-21 22:07:49",
                  "updatedAt": "2021-04-21 22:07:49",
                  "deletedAt": null,
                  "product": 936,
                  "nameEn": null,
                  "child": null
                },
                "creatorName": "杨攀迪",
                "createdAt": "2021-06-01 10:33:27",
                "updatedAt": "2021-06-05 02:12:40",
                "deletedAt": null,
                "product": 936,
                "nameEn": "testoneok",
                "child": null
              },
              "name": "V10R00F022C00",
              "children": [
                {
                  "id": 270,
                  "names": "",
                  "versionNum": "测试增加补丁版本222",
                  "description": "",
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-06-01 10:59:26",
                  "updatedAt": "2021-06-01 10:59:26",
                  "deletedAt": null,
                  "type": 7,
                  "versionCategory": "patch",
                  "releaseTime": "2021-06-10 00:00:00",
                  "versionStage": "RC",
                  "customerId": null,
                  "customerName": null,
                  "productNameEn": null,
                  "moduleNameEn": "testoneok",
                  "v": "10",
                  "r": "00",
                  "f": "022",
                  "c": "00",
                  "patchType": "sp",
                  "patchNo": "122",
                  "refVersion": 265,
                  "module": {
                    "id": 329,
                    "order": 1,
                    "name": "测试模块11111",
                    "description": "",
                    "parent": {
                      "id": 293,
                      "order": 0,
                      "name": "ypd测试2",
                      "description": "",
                      "parent": null,
                      "creatorName": "杨攀迪",
                      "createdAt": "2021-04-21 22:07:49",
                      "updatedAt": "2021-04-21 22:07:49",
                      "deletedAt": null,
                      "product": 936,
                      "nameEn": null,
                      "child": null
                    },
                    "creatorName": "杨攀迪",
                    "createdAt": "2021-06-01 10:33:27",
                    "updatedAt": "2021-06-05 02:12:40",
                    "deletedAt": null,
                    "product": 936,
                    "nameEn": "testoneok",
                    "child": null
                  },
                  "name": "V10R00F022C00",
                  "children": []
                }
              ]
            },
            {
              "id": 268,
              "names": "",
              "versionNum": "测试定制版本1118",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-06-01 10:58:48",
              "updatedAt": "2021-06-01 10:58:48",
              "deletedAt": null,
              "type": 6,
              "versionCategory": "customize",
              "releaseTime": "2021-06-10 00:00:00",
              "versionStage": "RC",
              "customerId": 88,
              "customerName": "测试一下",
              "productNameEn": null,
              "moduleNameEn": "testoneok",
              "v": "10",
              "r": "00",
              "f": "022",
              "c": "89",
              "patchType": null,
              "patchNo": null,
              "refVersion": 265,
              "module": {
                "id": 329,
                "order": 1,
                "name": "测试模块11111",
                "description": "",
                "parent": {
                  "id": 293,
                  "order": 0,
                  "name": "ypd测试2",
                  "description": "",
                  "parent": null,
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-04-21 22:07:49",
                  "updatedAt": "2021-04-21 22:07:49",
                  "deletedAt": null,
                  "product": 936,
                  "nameEn": null,
                  "child": null
                },
                "creatorName": "杨攀迪",
                "createdAt": "2021-06-01 10:33:27",
                "updatedAt": "2021-06-05 02:12:40",
                "deletedAt": null,
                "product": 936,
                "nameEn": "testoneok",
                "child": null
              },
              "name": "V10R00F022C89",
              "children": []
            },
            {
              "id": 267,
              "names": "",
              "versionNum": "测试啊啊",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-06-01 10:58:29",
              "updatedAt": "2021-06-01 10:58:29",
              "deletedAt": null,
              "type": 5,
              "versionCategory": "feature",
              "releaseTime": "2021-06-09 00:00:00",
              "versionStage": "RC",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": "testoneok",
              "v": "10",
              "r": "00",
              "f": "089",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": 264,
              "module": {
                "id": 329,
                "order": 1,
                "name": "测试模块11111",
                "description": "",
                "parent": {
                  "id": 293,
                  "order": 0,
                  "name": "ypd测试2",
                  "description": "",
                  "parent": null,
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-04-21 22:07:49",
                  "updatedAt": "2021-04-21 22:07:49",
                  "deletedAt": null,
                  "product": 936,
                  "nameEn": null,
                  "child": null
                },
                "creatorName": "杨攀迪",
                "createdAt": "2021-06-01 10:33:27",
                "updatedAt": "2021-06-05 02:12:40",
                "deletedAt": null,
                "product": 936,
                "nameEn": "testoneok",
                "child": null
              },
              "name": "V10R00F089C00",
              "children": [
                {
                  "id": 269,
                  "names": "",
                  "versionNum": "测试增加补丁版本",
                  "description": "",
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-06-01 10:59:09",
                  "updatedAt": "2021-06-01 10:59:09",
                  "deletedAt": null,
                  "type": 7,
                  "versionCategory": "patch",
                  "releaseTime": "2021-06-08 00:00:00",
                  "versionStage": "RC",
                  "customerId": null,
                  "customerName": null,
                  "productNameEn": null,
                  "moduleNameEn": "testoneok",
                  "v": "10",
                  "r": "00",
                  "f": "089",
                  "c": "00",
                  "patchType": "hp",
                  "patchNo": "122",
                  "refVersion": 267,
                  "module": {
                    "id": 329,
                    "order": 1,
                    "name": "测试模块11111",
                    "description": "",
                    "parent": {
                      "id": 293,
                      "order": 0,
                      "name": "ypd测试2",
                      "description": "",
                      "parent": null,
                      "creatorName": "杨攀迪",
                      "createdAt": "2021-04-21 22:07:49",
                      "updatedAt": "2021-04-21 22:07:49",
                      "deletedAt": null,
                      "product": 936,
                      "nameEn": null,
                      "child": null
                    },
                    "creatorName": "杨攀迪",
                    "createdAt": "2021-06-01 10:33:27",
                    "updatedAt": "2021-06-05 02:12:40",
                    "deletedAt": null,
                    "product": 936,
                    "nameEn": "testoneok",
                    "child": null
                  },
                  "name": "V10R00F089C00",
                  "children": []
                }
              ]
            },
            {
              "id": 264,
              "names": "",
              "versionNum": "测试增加主线版本",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-06-01 10:57:40",
              "updatedAt": "2021-06-01 10:57:40",
              "deletedAt": null,
              "type": 4,
              "versionCategory": "mainline",
              "releaseTime": "2021-06-15 00:00:00",
              "versionStage": "RC",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": "testoneok",
              "v": "10",
              "r": "00",
              "f": "000",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": null,
              "module": {
                "id": 329,
                "order": 1,
                "name": "测试模块11111",
                "description": "",
                "parent": {
                  "id": 293,
                  "order": 0,
                  "name": "ypd测试2",
                  "description": "",
                  "parent": null,
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-04-21 22:07:49",
                  "updatedAt": "2021-04-21 22:07:49",
                  "deletedAt": null,
                  "product": 936,
                  "nameEn": null,
                  "child": null
                },
                "creatorName": "杨攀迪",
                "createdAt": "2021-06-01 10:33:27",
                "updatedAt": "2021-06-05 02:12:40",
                "deletedAt": null,
                "product": 936,
                "nameEn": "testoneok",
                "child": null
              },
              "name": "V10R00F000C00",
              "children": []
            }
          ],
          [
            {
              "id": 266,
              "names": "",
              "versionNum": "测试增加主线版本2",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-06-01 10:58:15",
              "updatedAt": "2021-06-01 10:58:15",
              "deletedAt": null,
              "type": 4,
              "versionCategory": "mainline",
              "releaseTime": "2021-06-11 00:00:00",
              "versionStage": "TEST",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": "testoneok",
              "v": "22",
              "r": "01",
              "f": "000",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": null,
              "module": {
                "id": 329,
                "order": 1,
                "name": "测试模块11111",
                "description": "",
                "parent": {
                  "id": 293,
                  "order": 0,
                  "name": "ypd测试2",
                  "description": "",
                  "parent": null,
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-04-21 22:07:49",
                  "updatedAt": "2021-04-21 22:07:49",
                  "deletedAt": null,
                  "product": 936,
                  "nameEn": null,
                  "child": null
                },
                "creatorName": "杨攀迪",
                "createdAt": "2021-06-01 10:33:27",
                "updatedAt": "2021-06-05 02:12:40",
                "deletedAt": null,
                "product": 936,
                "nameEn": "testoneok",
                "child": null
              },
              "name": "V22R01F000C00",
              "children": []
            }
          ]
        ],
        [
          [
            {
              "id": 273,
              "names": "",
              "versionNum": "主线版本测试",
              "description": "",
              "creatorName": "杨攀迪",
              "createdAt": "2021-06-01 16:47:14",
              "updatedAt": "2021-06-01 16:47:14",
              "deletedAt": null,
              "type": 4,
              "versionCategory": "mainline",
              "releaseTime": "2021-06-09 00:00:00",
              "versionStage": "TEST",
              "customerId": null,
              "customerName": null,
              "productNameEn": null,
              "moduleNameEn": "testtwookk",
              "v": "01",
              "r": "00",
              "f": "000",
              "c": "00",
              "patchType": null,
              "patchNo": null,
              "refVersion": null,
              "module": {
                "id": 330,
                "order": 2,
                "name": "测试模块2222",
                "description": "",
                "parent": {
                  "id": 293,
                  "order": 0,
                  "name": "ypd测试2",
                  "description": "",
                  "parent": null,
                  "creatorName": "杨攀迪",
                  "createdAt": "2021-04-21 22:07:49",
                  "updatedAt": "2021-04-21 22:07:49",
                  "deletedAt": null,
                  "product": 936,
                  "nameEn": null,
                  "child": null
                },
                "creatorName": "杨攀迪",
                "createdAt": "2021-06-01 10:35:02",
                "updatedAt": "2021-06-05 02:12:40",
                "deletedAt": null,
                "product": 936,
                "nameEn": "testtwookk",
                "child": null
              },
              "name": "V01R00F000C00",
              "children": []
            }
          ]
        ]
      ],
      selectedVersion: {
        selectMainlineVersion: '',
        selectVersion: ''
      },
      mainlineVersionHighLightFields: '',
      data: [],
      versionRes: [],
      mainlineVersionsTree: [], // 选择主线版本搜索
      versionType: {
        1: '标准版本',
        2: '受控版本',
        3: '测试版本',
        4: '主线版本',
        5: '特性版本',
        6: '定制版本',
        7: '补丁版本'
      },
      dialogVisible: false,
      pageSizeLimit: 5,
      showTableVersion: false,
      showTableVersionData: [],
      allVersionHighLightFields: '',
      otherVersion: {},
      currentVersion: {}
    }
  },
  methods: {

    /**
     * 筛选主线版本的操作
     * value为当前选中的id值
     * value为null代表清空选项
     * @param value
     */
    selectMainlineVersion (value) {
      // 选择主线版本时 将另一个选择框清空
      this.selectedVersion.selectVersion = null
      this.showTableVersionData = []
      request.getModuleVersionsTree(value).then(res => {
        if (res.code === 2000 && res.data != null) {
          this.mainlineVersionsTree = res.data
          let _mainlineVersionsTree = JSON.parse(JSON.stringify(this.mainlineVersionsTree))
          this.mainlineVersionHighLightFields = this.treeToList(_mainlineVersionsTree).filter(res => res.id === value)[0].name
        }
      })
    },

    /**
     * 筛选所有版本
     * @param value
     */
    selectVersion (value) {
      if (value != null && value !== '') {
        this.mainlineVersionsTree = []
        this.selectedVersion.selectMainlineVersion = null
        let _moduleVersions = JSON.parse(JSON.stringify(this.moduleVersions))
        let res = this.treeToList(_moduleVersions).filter(res => res.id === value)
        if (res.length > 0) {
          // 展示表格数据
          request.getModuleVersionsTree(value).then(res => {
            if (res.code === 2000 && res.data != null) {
              this.showTableVersionData = res.data
              this.showTableVersion = true
              let _showTableVersionData = JSON.parse(JSON.stringify(this.showTableVersionData))
              this.allVersionHighLightFields = this.treeToList(_showTableVersionData).filter(res => res.id === value)[0].name
            }
          })
          return
        }
        this.showTableVersion = false
        // 展示其他版本类型
        request.getOtherVersions(value).then(res => {
          if (res.code === 2000) {
            this.otherVersion = res.data
          }
        })
      }
    },

    /**
     * 点击清空按钮回显所有数据
     */
    clearVersion () {
      this.showTableVersion = false
      let productId = this.productId
      this.$store.dispatch('getModuleVersion', {
        product: productId,
        p: 1,
        n: 5
      })
      this.$store.dispatch('getModuleVersions', {
        productId: productId
      })
      this.mainlineVersionsTree = []
      this.selectedVersion.selectVersion = null
      this.showTableVersionData = []
    },

    /**
     * 远程模糊搜索
     */
    getVersion: async function (name) {
      let params = { 'name': name, 'page': 1, 'pageSize': 50, 'productId': this.productId }
      request.getVersions(params).then(res => {
        if (res.code === 2000) {
          this.versionRes = res.data.items
        }
      })
    },

    /**
     * 将嵌套的数组展平为一维数组
     */
    treeToList (trees) {
      let all = []
      if (trees !== undefined && trees.length > 0) {
        for (let i = 0; i < trees.length; i++) {
          let queen = []
          queen = queen.concat(trees[i])
          while (queen.length) {
            let first = queen.shift()
            if (first.children) {
              queen = queen.concat(first.children)
              delete first['children']
            }
            all.push(first)
          }
        }
        return all
      }
      return []
    },

    /**
     * 处理子组件向父组件传递的点击时间点
     * @param value
     */
    click (value) {
      this.clickVersion(value.module, value.version)
      let res = JSON.parse(JSON.stringify(this.moduleVersions))
      this.currentVersion = this.treeToList(res).filter(res => {
        // eslint-disable-next-line no-return-assign
        return res.module.id = value.module.id
      })[0]
    },

    getProductInfo (id) {
      this.dialogVisible = true
      this.$store.dispatch('getProductInfo', {
        file: id
      })
    },
    clickVersion (module, version) {
      // this.choicedVersion = version
      this.dialogTableVisible = true
      this.$store.dispatch('getVersionFile', {
        version: version.id,
        product: this.productId,
        module: module.id
      })
      this.choicedModule = module
    },
    type (id) {
      let filter = this.softTypes.filter(item => {
        return item.id === id
      })
      return filter.length ? filter[0].label : '-'
    }
  }
}
</script>

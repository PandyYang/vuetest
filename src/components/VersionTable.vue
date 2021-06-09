<template>
  <div>
<!--    ---------------------------------------------原来的table--------------------------------------------------->
<!--    <table cellspacing="0" cellpadding="0" class="version-table">-->
<!--      <tr>-->
<!--        <th class="cell">主线</th>-->
<!--        <th class="cell">版本名称</th>-->
<!--        <th class="cell">补丁</th>-->
<!--      </tr>-->
<!--      <tr v-for="(item, index) in tableData" :key="item.id">-->
<!--        <td v-if="index===0" :rowspan="tableData.length" style="text-align: center;" class="cell">{{ tableData[0].name.substring(0, 6) }}</td>-->
<!--        <td @click="clickThere(item.module, item)"-->
<!--            :style="{'color':(item.name === highLightFields ? 'red' : '#008dff')}"-->
<!--            class="cell"-->
<!--            :title="item.versionNum">{{item.name}}-->
<!--          <el-tag class="document-type" size="small">{{file_tag[item.type]}}</el-tag>-->
<!--        </td>-->
<!--        <td class="cell">-->
<!--          <table v-if="item.children.length > 0"-->
<!--                 cellspacing="0"-->
<!--                 cellpadding="0"-->
<!--                 style=" width: 100%; border-collapse: collapse;"-->
<!--                 class="border-none">-->
<!--            <tr v-for="index in item.children" :key="index.id" class="row">-->
<!--              <td @click="clickThere(item.module, item)"-->
<!--                  :style="{'color':(index.name === highLightFields ? 'red' : '#008dff')}"-->
<!--                  :title="index.versionNum"-->
<!--                  class="cell">{{index.name}}-->
<!--              </td>-->
<!--            </tr>-->
<!--          </table>-->
<!--          <div v-else>-->
<!--            - -->
<!--          </div>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->

<!------------------------------------------------------测试的table----------------------------------------------------->
<!--    <div v-for="(tableDatas, x) in products" :key="x">-->
<!--      <div v-for="(tableData, y) in tableDatas" :key="y">-->
<!--      <table cellspacing="0" cellpadding="0" class="version-table">-->
<!--        <tr v-show="y === 0">-->
<!--          <th class="cell">主线</th>-->
<!--          <th class="cell">版本名称</th>-->
<!--          <th class="cell">补丁</th>-->
<!--        </tr>-->
<!--        <tr v-for="(item, index) in tableData" :key="item.id">-->
<!--          <td v-if="index===0" :rowspan="tableData.length" style="text-align: center;" class="cell">{{ tableData.filter(res => res.type === 4)[0].name.substring(0, 6) }}</td>-->
<!--          <td @click="clickThere(item.module, item)"-->
<!--              :style="{'color':(item.name === highLightFields ? 'red' : '#008dff')}"-->
<!--              class="cell"-->
<!--              :title="item.versionNum">{{item.name}}-->
<!--            <el-tag class="document-type" size="small">{{file_tag[item.type]}}</el-tag>-->
<!--          </td>-->
<!--          <td class="cell">-->
<!--            <table v-if="item.children.length > 0"-->
<!--                   cellspacing="0"-->
<!--                   cellpadding="0"-->
<!--                   style=" width: 100%; border-collapse: collapse;"-->
<!--                   class="border-none">-->
<!--              <tr v-for="index in item.children" :key="index.id" class="row">-->
<!--                <td @click="clickThere(item.module, item)"-->
<!--                    :style="{'color':(index.name === highLightFields ? 'red' : '#008dff')}"-->
<!--                    :title="index.versionNum"-->
<!--                    class="cell">{{index.name}}-->
<!--                </td>-->
<!--              </tr>-->
<!--            </table>-->
<!--            <div v-else>-->
<!--              - -->
<!--            </div>-->
<!--          </td>-->
<!--        </tr>-->
<!--      </table>-->
<!--      </div>-->
<!--    </div>-->

<!--    -----------------------------------------------最终的table------------------------------------------>

          <div v-for="(tableData, y) in tableDatas" :key="y">
          <table cellspacing="0" cellpadding="0" class="version-table">
            <tr>
              <th v-show="y===0" class="cell">主线</th>
              <th v-show="y===0" class="cell">版本名称</th>
              <th v-show="y===0" class="cell">补丁</th>
            </tr>
            <tr v-for="(item, index) in tableData" :key="item.id">
              <td v-if="index===0" :rowspan="tableData.length" style="text-align: center;" class="cell">{{ tableData.filter(res => res.type === 4)[0].name.substring(0, 6) }}</td>
              <td @click="clickThere(item.module, item)"
                  :style="{'color':(item.name === highLightFields ? 'red' : '#008dff')}"
                  class="cell"
                  :title="item.versionNum">{{item.name}}
                <el-tag class="document-type" size="small">{{file_tag[item.type]}}</el-tag>
              </td>
              <td class="cell">
                <table v-if="item.children.length > 0"
                       cellspacing="0"
                       cellpadding="0"
                       style=" width: 100%; border-collapse: collapse;"
                       class="border-none">
                  <tr v-for="index in item.children" :key="index.id" class="row">
                    <td @click="clickThere(item.module, item)"
                        :style="{'color':(index.name === highLightFields ? 'red' : '#008dff')}"
                        :title="index.versionNum"
                        class="cell">{{index.name}}
                    </td>
                  </tr>
                </table>
                <div v-else>
                  -
                </div>
              </td>
            </tr>
          </table>
          </div>
  </div>
</template>
<script>

export default {
  name: 'versionTable',
  props: {
    tableDatas: {
      type: Array,
      default: this.tableData
    },
    highLightFields: {
      type: String
    }
  },
  computed: {

  },
  data () {
    return {
      file_tag: ['', '标准', '测试', '受控', '主线', '特性', '定制', '补丁'],
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
      ]
    }
  },
  methods: {
    clickThere: function (module, version) {
      let data = {
        module: module,
        version: version
      }
      this.$emit('click', data)
    }
  }
}
</script>

<style scoped>
  .version-table {
    width: 100%;
    border: 1px solid #e4e7ed;
  }

  .cell {
    width: 33%;
    text-align: center;
    cursor: pointer;
    border-collapse: collapse;
    border: 1px solid  #e4e7ed;
    padding: 5px 5px;
  }

  .border-none {
    border-collapse: collapse;
    border-style: hidden;
  }

 .row {
    border-collapse: collapse;
    border: 2px solid  #e4e7ed;
  }

 .versionColor {
    color: red;
 }
</style>

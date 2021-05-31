<template>
  <div style="width: 80%">
    <table border="1" style="width: 100%;">
      <tr>
        <th>主线</th>
        <th>版本名称</th>
        <th>补丁</th>
      </tr>
      <tr v-for="item in tableData" :key="item.id">
        <td>V01R</td>
        <td @click="clickthere(item.id)">{{item.versionNum}}</td>
        <td>
          <table style="width: 100%" v-if="item.children.length > 0" >
            <tr v-for="index in item.children" :key="index.id">
              <td @click="clickthere(index.id)">
                {{index.name}}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableData: {
      type: Array
    }
  },

  data () {
    return {
      tempData: [ { id: 1, names: 'test1' } ]
    }
  },

  created () {
    this.tableData = [
      {
        'id': 244,
        'names': '',
        'versionNum': '测试啊',
        'description': '',
        'creatorName': '杨攀迪',
        'createdAt': '2021-05-19 09:27:27',
        'updatedAt': '2021-05-19 09:27:27',
        'deletedAt': null,
        'type': 4,
        'versionCategory': 'mainline',
        'releaseTime': '2021-05-06 00:00:00',
        'versionStage': 'TEST',
        'customerId': null,
        'customerName': null,
        'productNameEn': null,
        'moduleNameEn': null,
        'v': '01',
        'r': '02',
        'f': '000',
        'c': '00',
        'patchType': null,
        'patchNo': null,
        'refVersion': null,
        'children': [
          {
            'id': 262,
            'names': '',
            'versionNum': '测试补丁版本啊',
            'description': '',
            'creatorName': '杨攀迪',
            'createdAt': '2021-05-27 17:44:43',
            'updatedAt': '2021-05-27 17:44:43',
            'deletedAt': null,
            'type': 7,
            'versionCategory': 'patch',
            'releaseTime': '2021-05-05 00:00:00',
            'versionStage': 'TEST',
            'customerId': null,
            'customerName': null,
            'productNameEn': null,
            'moduleNameEn': null,
            'v': '01',
            'r': '22',
            'f': '000',
            'c': '00',
            'patchType': 'hp',
            'patchNo': '123',
            'refVersion': 259,
            'children': [],
            'name': 'V01R22F000C00'
          }
        ],
        'name': 'V01R02F000C00'
      },
      {
        'id': 245,
        'names': '',
        'versionNum': '12312312',
        'description': '',
        'creatorName': '杨攀迪',
        'createdAt': '2021-05-19 09:27:38',
        'updatedAt': '2021-05-19 09:27:38',
        'deletedAt': null,
        'type': 6,
        'versionCategory': 'customize',
        'releaseTime': '2021-05-06 00:00:00',
        'versionStage': 'TEST',
        'customerId': 88,
        'customerName': '测试一下',
        'productNameEn': null,
        'moduleNameEn': null,
        'v': '01',
        'r': '02',
        'f': '000',
        'c': '89',
        'patchType': null,
        'patchNo': null,
        'refVersion': 244,
        'children': [],
        'name': 'V01R02F000C89'
      },
      {
        'id': 246,
        'names': '',
        'versionNum': '测啊',
        'description': '',
        'creatorName': '杨攀迪',
        'createdAt': '2021-05-19 09:32:47',
        'updatedAt': '2021-05-19 09:32:47',
        'deletedAt': null,
        'type': 4,
        'versionCategory': 'mainline',
        'releaseTime': '2021-05-05 00:00:00',
        'versionStage': 'TEST',
        'customerId': null,
        'customerName': null,
        'productNameEn': null,
        'moduleNameEn': null,
        'v': '00',
        'r': '66',
        'f': '000',
        'c': '00',
        'patchType': null,
        'patchNo': null,
        'refVersion': null,
        'children': [],
        'name': 'V00R66F000C00'
      },
      {
        'id': 247,
        'names': '',
        'versionNum': '`21321312',
        'description': '',
        'creatorName': '杨攀迪',
        'createdAt': '2021-05-19 09:32:59',
        'updatedAt': '2021-05-19 09:32:59',
        'deletedAt': null,
        'type': 6,
        'versionCategory': 'customize',
        'releaseTime': '2021-05-13 00:00:00',
        'versionStage': 'RC',
        'customerId': 88,
        'customerName': '测试一下',
        'productNameEn': null,
        'moduleNameEn': null,
        'v': '00',
        'r': '66',
        'f': '000',
        'c': '89',
        'patchType': null,
        'patchNo': null,
        'refVersion': 246,
        'children': [],
        'name': 'V00R66F000C89'
      },
      {
        'id': 259,
        'names': '',
        'versionNum': '测试主线版本2',
        'description': '',
        'creatorName': '杨攀迪',
        'createdAt': '2021-05-27 17:43:41',
        'updatedAt': '2021-05-27 17:43:41',
        'deletedAt': null,
        'type': 4,
        'versionCategory': 'mainline',
        'releaseTime': '2021-05-06 00:00:00',
        'versionStage': 'TEST',
        'customerId': null,
        'customerName': null,
        'productNameEn': null,
        'moduleNameEn': null,
        'v': '01',
        'r': '22',
        'f': '000',
        'c': '00',
        'patchType': null,
        'patchNo': null,
        'refVersion': null,
        'children': [
          {
            'id': 262,
            'names': '',
            'versionNum': '测试补丁版本啊',
            'description': '',
            'creatorName': '杨攀迪',
            'createdAt': '2021-05-27 17:44:43',
            'updatedAt': '2021-05-27 17:44:43',
            'deletedAt': null,
            'type': 7,
            'versionCategory': 'patch',
            'releaseTime': '2021-05-05 00:00:00',
            'versionStage': 'TEST',
            'customerId': null,
            'customerName': null,
            'productNameEn': null,
            'moduleNameEn': null,
            'v': '01',
            'r': '22',
            'f': '000',
            'c': '00',
            'patchType': 'hp',
            'patchNo': '123',
            'refVersion': 259,
            'children': [],
            'name': 'V01R22F000C00'
          },
          {
            'id': 262,
            'names': '',
            'versionNum': '测试补丁版本啊',
            'description': '',
            'creatorName': '杨攀迪',
            'createdAt': '2021-05-27 17:44:43',
            'updatedAt': '2021-05-27 17:44:43',
            'deletedAt': null,
            'type': 7,
            'versionCategory': 'patch',
            'releaseTime': '2021-05-05 00:00:00',
            'versionStage': 'TEST',
            'customerId': null,
            'customerName': null,
            'productNameEn': null,
            'moduleNameEn': null,
            'v': '01',
            'r': '22',
            'f': '000',
            'c': '00',
            'patchType': 'hp',
            'patchNo': '123',
            'refVersion': 259,
            'children': [],
            'name': 'V01R22F000C00'
          }
        ],
        'name': 'V01R22F000C00'
      },
      {
        'id': 260,
        'names': '',
        'versionNum': '测试特性版本增加',
        'description': '',
        'creatorName': '杨攀迪',
        'createdAt': '2021-05-27 17:44:00',
        'updatedAt': '2021-05-27 17:44:00',
        'deletedAt': null,
        'type': 5,
        'versionCategory': 'feature',
        'releaseTime': '2021-04-30 00:00:00',
        'versionStage': 'TEST',
        'customerId': null,
        'customerName': null,
        'productNameEn': null,
        'moduleNameEn': null,
        'v': '00',
        'r': '66',
        'f': '122',
        'c': '00',
        'patchType': null,
        'patchNo': null,
        'refVersion': 246,
        'children': [
          {
            'id': 262,
            'names': '',
            'versionNum': '测试补丁版本啊',
            'description': '',
            'creatorName': '杨攀迪',
            'createdAt': '2021-05-27 17:44:43',
            'updatedAt': '2021-05-27 17:44:43',
            'deletedAt': null,
            'type': 7,
            'versionCategory': 'patch',
            'releaseTime': '2021-05-05 00:00:00',
            'versionStage': 'TEST',
            'customerId': null,
            'customerName': null,
            'productNameEn': null,
            'moduleNameEn': null,
            'v': '01',
            'r': '22',
            'f': '000',
            'c': '00',
            'patchType': 'hp',
            'patchNo': '123',
            'refVersion': 259,
            'children': [],
            'name': 'V01R22F000C00'
          }
        ],
        'name': 'V00R66F122C00'
      },
      {
        'id': 261,
        'names': '',
        'versionNum': '测试特性版本2',
        'description': '',
        'creatorName': '杨攀迪',
        'createdAt': '2021-05-27 17:44:24',
        'updatedAt': '2021-05-27 17:44:24',
        'deletedAt': null,
        'type': 5,
        'versionCategory': 'feature',
        'releaseTime': '2021-05-05 00:00:00',
        'versionStage': 'GA',
        'customerId': null,
        'customerName': null,
        'productNameEn': null,
        'moduleNameEn': null,
        'v': '01',
        'r': '22',
        'f': '124',
        'c': '00',
        'patchType': null,
        'patchNo': null,
        'refVersion': 259,
        'children': [],
        'name': 'V01R22F124C00'
      }
    ]
  },
  methods: {
    clickthere: function (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>

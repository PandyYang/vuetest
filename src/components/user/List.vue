<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="编号"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="生日" prop="bir"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
      <el-table-column label="操作" align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入姓名关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-popconfirm
            confirm-button-text="好的"
            cancel-button-text="不用了"
            icon="el-icon-info"
            icon-color="red"
            title="这是一段内容确定删除吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button
              size="mini"
              type="danger"
              slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-button style="margin: 10px 0px" @click="show = !show" type="success" size="mini">添加</el-button>
    <el-collapse-transition name="el-zoom-in-center">
      <div v-show="show" class="transition-box">
        <el-form :hide-required-asterisk="false" :rules="rules" ref="userForm" :model="form" label-suffix=":" label-width="80px">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="生日" prop="bir">
            <el-col>
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.bir"
                value-format="yyyy-MM-dd HH:mm:ss"
                style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="信息地址" prop="address">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('userForm')">创建用户</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      tableData: [],
      search: '',
      show: true,
      form: {
        name: '',
        bir: '',
        sex: '男',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        bir: [
          { required: true, message: '请选择用户生日', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入用户地址', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.findAllTableData()
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    findAllTableData () {
      this.$http.get('http://localhost:8084/user/findAll').then(res => {
        this.tableData = res.data
      })
    },
    onSubmit (userForm) {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          this.$http.post('http://localhost:8084/user/save', this.form).then(res => {
            if (res.data.status) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
              this.form = {}
              this.show = false
              this.findAllTableData()
            } else {
              this.$message({
                message: '添加失败',
                type: 'error'
              })
            }
          })
        } else {
          this.$message.error('表单信息有误')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.transition-box {
  margin-bottom: 10px;
  width: 100%;
  height: 400px;
  border-radius: 4px;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>

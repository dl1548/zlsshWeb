<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="IP" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column label="端口" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.port }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名" align="center">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="登录类型1" align="center">
        <template slot-scope="scope">
          {{ scope.row.login_type }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <!-- <el-button size="mini" type="primary" @click="handleConnect(row,$index,)"> -->
            <el-button size="mini" type="primary" @click="handleConnect(row,$index,)">
            连接
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div id="django-webssh-terminal" class="hide">
      <div id="terminal"></div>
    </div>

  </div>
  

</template>

<script>
import { getList } from '@/api/host'
// import { WS } from '@/utils/ssh-websocket'  // ws 方法

export default {
  // filters: {
  //   statusFilter(status) {
  //     const statusMap = {
  //       published: 'success',
  //       draft: 'gray',
  //       deleted: 'danger'
  //     }
  //     return statusMap[status]
  //   }
  // },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    handleConnect(row, index) { 
      console.log(row);
      websocket()
    },
  }
}
</script>

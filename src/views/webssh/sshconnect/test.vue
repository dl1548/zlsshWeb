<template>
  <div class="login-container">
    <el-form ref="sshForm" :model="sshForm" label-width="80px">
        <el-form-item label="主机地址">
            <el-input v-model="sshForm.host" name="host"></el-input>
        </el-form-item>
        <el-form-item label="用户名 ">
            <el-input v-model="sshForm.username" name="username"></el-input>
        </el-form-item>
        <el-form-item label="密码 ">
            <el-input v-model="sshForm.password" name="password"></el-input>
        </el-form-item>
        <el-form-item label="端口 ">
            <el-input v-model="sshForm.port" name='port'></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">连接</el-button>
        </el-form-item>
    </el-form>
    <div id="django-webssh-terminal" class="hide">
      <div id="terminal"></div>
    </div>
  </div>
</template>


<script>
  import { websocket } from '@/utils/ssh-websocket'

  export default {
    data() {
      return {
        sshForm: {
          host: '',
          username: '',
          password: '',
          port: '',
        }
      }
    },
    methods: {
      onSubmit() {
        websocket()
      }
    }
  }
</script>

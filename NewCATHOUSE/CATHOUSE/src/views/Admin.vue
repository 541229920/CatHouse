<template>
    <div>
      <form @submit="handleSubmit" @submit.prevent="false">
        <label for="name">用户名:</label>
        <input type="text" v-model="FormData.username" />
        <p>{{}}</p>
        <p></p>
        <br />
        <label for="name">密　码:</label>
        <input type="text" v-model="FormData.password" />
        <p>{{}}</p>
        <p></p>
        <br />
        <label for="name">手　机:</label>
        <input type="text" v-model="FormData.phone" />
        <p>{{}}</p>
        <p></p>
        <br />
        <label for="name">等　级:</label>
        <select v-model="FormData.level">
          <option value="guest">来宾</option>
          <option value="user">用户</option>
          <option value="admin">管理员</option>
        </select>
        <p>{{}}</p>
        <p></p>
        <br />
        <button type="submit">Get</button>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import axios from "axios";
  import { ref } from "vue";
  
  interface FormData {
    username: String | null;
    password: String | null;
    level: String | null;
    phone: String | null;
  }
  
  const FormData = ref<FormData>({
    username: null,
    password: null,
    level: null,
    phone: null,
  });
  
  const handleSubmit = () => {
    console.log(FormData.value);
  };
  </script>
  
  <style lang="less" scoped></style>
  
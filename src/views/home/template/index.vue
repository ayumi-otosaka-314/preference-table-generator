<template>
  <div >
    <h2>选择模板</h2>
    <div un-flex="~">
      <router-link :to="{ name: ROUTE_NAME_DEFINE.careerPersonalPreference}">游戏生涯个人喜好表</router-link>
    </div>
    <div un-flex="~">
      <router-link :to="{ name: ROUTE_NAME_DEFINE.railVehiclePreference}">铁道车辆个人喜好表</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAME_DEFINE } from '@/router';</script>

<style scoped>

</style>

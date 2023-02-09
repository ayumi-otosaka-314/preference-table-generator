<template>
  <div class="w-full bg-white p-6" un-flex="col" ref="picAreaRef">
    <h2 un-text="12">铁道车辆个人喜好表</h2>
    <div un-flex="shrink-0" un-grid="~ cols-3" class="gap-2">
      <RailCard :item="i" v-for="i in gameList" :key="i.label"></RailCard>
    </div>
  </div>
  <div class="mt-4 space-x-4">
    <button @click="exportData">导出数据</button>
    <button @click="generateAPicture">生成图片</button>
  </div>
</template>

<script setup lang="ts">
import RailCard from '@/components/RailCard.vue';
import type { GameCardItem } from '@/types';
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { reactive, ref } from 'vue';

const gameList = reactive<GameCardItem[]>([
    '入坑车辆',
    '最喜欢',
    '乘坐次数最多',
    '乘坐距离最长',
    '最想安利',
    '最想乘坐',
    '最想拍摄',
    '体验最独特',
    '不想乘坐',
].map(label => ({
  label,
  content: ''
})))

const picAreaRef = ref<HTMLDivElement | null>(null)

/**
 * 导出数据
 */
function exportData() {
  const data = {
    version: 1,
    list: gameList
  }
  saveAs(new Blob([JSON.stringify(data)], {type: "text/plain;charset=utf-8"}), '铁道车辆个人喜好表.json')
}

/**
 * 生成图片
 */
function generateAPicture() {
  if (picAreaRef.value) {
    htmlToImage.toBlob(picAreaRef.value)
        .then(blob => {
          if (blob) {
            saveAs(blob, '铁道车辆个人喜好表.png');
          }
        })
        .catch(function (error) {
          console.error('生成失败!', error);
        });
  }
}
</script>

<style scoped>

</style>

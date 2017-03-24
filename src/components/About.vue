<template>
  <div class="page">
    <search v-model="keywords" placeholder="搜索" :on-search="onSearch" :on-cancel="onCancel"></search>
    <scroll class="page-content" :on-refresh="onRefresh" :on-infinite="onInfinite">
        <item></item>
        <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
    </scroll>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                item: [],
                infiniteCount: 0
            }
        },
        mounted() {
            
        }
    }
</script>

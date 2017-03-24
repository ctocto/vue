<template>
  <div class="page">
    <div class="page-content">
        <tabs position="top" :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
    </div>
    <!-- <scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
        <feed-item :data-items="item"></feed-item>
        <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
    </scroll> -->
  </div>
</template>
<script>
    export default {
        data(){
            return {
                tabs: ["通知", "赞与感谢"],
                tabIndex: 0 
            }
        },
        methods: {
            onTabClick(index){
                this.tabIndex = index;
            }
        }
    }
</script>
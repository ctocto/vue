<template>
  <div class="page">
    <search v-model="keywords" placeholder="搜索" :on-search="onSearch" :on-cancel="onCancel"></search>
    <scroll class="page-content" :on-refresh="onRefresh" :on-infinite="onInfinite">
        <feed-item :data-items="item"></feed-item>
        <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
    </scroll>
  </div>
</template>
<script>
    import feedItem from './FeedItem.vue'
    import itemData from '../../mock/indexdata.js'

    export default {
        data () {
            return {
                item: itemData.items,
                infiniteCount: 0,
                keywords: ''
            }
        },
        mounted() {
            
        },
        methods: {
            onSearch(keywords) {
                this.searching = true;
            },

            onCancel() {
                this.searching = false;
                this.keywords = ''
            },
            onRefresh(done) {
                setTimeout(() => {
                  let start = this.top - 1
                  // for (let i = start; i > start - 10; i--) {
                  //   this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
                  // }
                  // this.top = this.top - 10;

                  done()
                }, 1500)
            },

            onInfinite(done) {
                setTimeout(() => {
                  if (this.infiniteCount < 2) {
                    let start = this.bottom + 1
                    // for (let i = start; i < start + 10; i++) {
                    //   this.items.push(i + ' - keep walking, be 2 with you.')
                    // }
                    // this.bottom = this.bottom + 10;

                    this.infiniteCount++
                  }

                  done()
                }, 1500)
            }
        },
        components: {
            'feed-item': feedItem
        }
    }
</script>

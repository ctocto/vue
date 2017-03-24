<template>
    <div class="feed-padding">
        <div class="feed-item" v-for="item in dataItems">
            <div class="feed-main">
                <div class="feed-user-info">
                    <i class="feed-avatar">
                        <img :src="item.avatar">
                    </i>
                    <p class="feed-author">来自话题: {{item.author}}</p>
                </div>
                <h2 class="feed-title">{{item.title}}</h2>
                <div class="feed-info">
                    <p class="feed-imgbox"><img :src="item.image" alt="" class=""></p>
                    {{item.shortText}}
                </div>
                <div class="feed-widget">
                    <span>{{item.assist}}</span>赞同 ·
                    <span>{{item.comment}}</span>评论 ·
                    <span class="j-focus">关注问题</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default{
        props: ['dataItems']
    }
</script>

<style scoped>
    .feed-item {padding:0.2rem;border-bottom: 1px solid #eee; border-top: 1px solid #eee;margin-bottom: 0.2rem;background: #fff;}
    .feed-item .feed-main .feed-title {color: #222;font-size: 0.34rem;margin-bottom: 0.15rem;}
    .feed-item .feed-main .feed-info {font-size: 28px; color:#222;word-wrap: break-word;}
    .feed-item .feed-imgbox {min-height: 0.2rem;overflow-y: hidden;}
    .feed-item .feed-info img{float: left;margin:0 15px 5px 0;}
    .feed-item .feed-info .feed-show-all {font-size: 0.28rem;color:#259;}
    .feed-item .feed-avatar{display: inline-block; width: 0.5rem; height: 0.5rem; vertical-align: middle; border-radius: 100%; overflow-y: hidden;}
    .feed-item .feed-avatar img{display: block; width: 100%;}
    .feed-item .feed-author {display:inline-block; color:#999;font-size: 0.28rem;font-weight: 600;margin-bottom: 0.05rem; vertical-align: middle;}
    .feed-item .feed-widget{font-size: 0.28rem; color: #999;margin-top: 0.1rem;}
    .feed-item .j-focus{vertical-align: middle;}
</style>
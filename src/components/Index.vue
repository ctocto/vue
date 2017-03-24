<template>
  <div class="page" v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#44CC00', onMenuClick: menuClicked}">
        <router-view></router-view>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                menus: [
                  {
                    iconOn: 'ion-ios-paper',
                    iconOff: 'ion-ios-paper-outline',
                    text: '首页',
                    path: '/home'
                  },
                  {
                    iconOn: 'ion-ios-navigate',
                    iconOff: 'ion-ios-navigate-outline',
                    text: '发现',
                    path: '/discount'
                  },
                  {
                    iconOn: 'ion-ios-bell',
                    iconOff: 'ion-ios-bell-outline',
                    text: '通知',
                    path: '/notice',
                    badge: '5'
                  },
                  {
                    iconOn: 'ion-ios-chatbubble',
                    iconOff: 'ion-ios-chatbubble-outline',
                    text: '私信',
                    path: '/user'
                  },
                  {
                    iconOn: 'ion-android-menu',
                    iconOff: 'ion-android-menu',
                    text: '更多',
                    path: '/more'
                  }
                ]
            }
        },
        mounted() {
            
        },
        methods: {
            menuClicked() {

            }
        }
    }
</script>

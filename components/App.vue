<template>
  <div>
    <headertop></headertop>
    <header-sub></header-sub>
    <title-header></title-header>
    <list-side1></list-side1>
    <list-side2></list-side2>
    <list-side3></list-side3>
    <hit></hit>
    <br><br><br>
    <player></player>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import headertop from './header/header'
import headerSub from './header/subHeader'
import titleHeader from './header/titleHeader'
import listSide1 from './content/side1/lists.vue'
import listSide2 from './content/side2/lists.vue'
import listSide3 from './content/side3/lists.vue'
import hit from './content/hitChart/hit.vue'
import player from './player/player.vue'
export default {
  name: 'App',
  mounted () {
    var vm = this
    let setData = []
    axios.get('https://fir-auth-12e52.firebaseio.com/data.json').then(res => {
      for (var index in res.data) {
        if (res.data.hasOwnProperty(index)) {
          setData.push(res.data[index])
        }
      }
    })
    vm.getAlbum(setData)
  },
  methods: {
    ...mapActions([
      'getAlbum'
    ])
  },
  components: {
    headertop,
    headerSub,
    titleHeader,
    listSide1,
    listSide2,
    listSide3,
    hit,
    player
  }
}
</script>

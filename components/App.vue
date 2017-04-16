<template>
  <div>
    <headertop></headertop>
    <header-sub></header-sub>
    <title-header></title-header>
    <list-side1></list-side1>
  </div>
</template>

<script>
import headertop from './header/header'
import headerSub from './header/subHeader'
import titleHeader from './header/titleHeader'
import listSide1 from './content/side1/lists.vue'

export default {
  name: 'App',
  components: {
    headertop,
    headerSub,
    titleHeader,
    listSide1
  }
}
</script>

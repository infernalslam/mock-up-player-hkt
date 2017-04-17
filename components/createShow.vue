<template>
  <div>
    <headertop></headertop>
    <header-sub></header-sub>
    <title-create></title-create>
    <form-create></form-create>
  </div>
</template>

<script>
import headertop from './header/header'
import headerSub from './header/subHeader'
import titleCreate from './header/titleCreate'
import formCreate from './createplaylist/formCreate'

export default {
  name: 'createShow',
  components: {
    headertop,
    headerSub,
    titleCreate,
    formCreate
  }
}
</script>

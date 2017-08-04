<template>
  <div id='App'>
    <transition appear mode="out-in" name='fade'>
      <navigation v-if="route !== 'Landing'"></navigation>
    </transition>
    <transition name='fade' appear mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
  name: 'app',
  created () {
    this.route = this.$router.currentRoute.name;
  },
  watch: {
    '$route' (to, from) {
      this.route = to.name;
    }
  },
  data () {
    return {
      route: ''
    };
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import "./styles/colors.scss";
html {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  min-height: 100%;
  width: 100%;
  height: 100%;
  background-color: $color-primary-0;
  font-family: 'Inconsolata', monospace;
}
</style>

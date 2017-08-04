<template>
  <div id='landing' class='page'>
    <h1 class='text-center'>
      SHOCKTHEWOLF
    </h1>
    <h2 class='text-center'>
      ENGINEERING
    </h2>
    <div class='text-center'>
      <vue-typer :text='msg' erase-style='select-back' erase-delay="50"></vue-typer>
    </div>
    <navigation></navigation>
    <wiggly-button text='Contact me'></wiggly-button>
  </div>
</template>

<script>
import {
  VueTyper
} from 'vue-typer';

import Navigation from './Navigation';
import WigglyButton from './WigglyButton';

export default {
  name: 'landing',
  data () {
    return {
      msg: ['import {webdev, embedded, iot} from \'skills\'', '#include <skills.hpp>', 'from skills import webdev, embedded, iot', 'import shockthewolf.com.skills.*;']
    };
  },
  components: {
    VueTyper,
    Navigation,
    WigglyButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/colors.scss';
@import '../styles/mixins.scss';
h1,
h2 {
  color: $color-heading;
  font-size: 10vmax;
  line-height: 3vmax;
  margin: 0px;
  padding: 5vh;
}

h2 {
  font-size: 7vmax;
}


.button-container {
  font-size: 3vmax;
  padding-top: 10vh;
  color: $color-typer;
  a {
    text-decoration: none;
    background-color: transparent;
    border: 0;
    color: $color-typer;
    &:hover {
      cursor: pointer;
      border-radius: 2px;
      background: green;
      color: black;
    }
  }
}
</style>

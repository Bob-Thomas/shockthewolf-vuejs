<template>
  <div id='landing' class='page'>
    <h1 class='text-center'>
      SHOCKTHEWOLF
    </h1>
    <h2 class='text-center'>
      ENGINEERING
    </h2>
    <div class='text-center'>
      <vue-typer :text='msg' erase-style='select-back' :erase-delay="delay"></vue-typer>
    </div>
    <navigation></navigation>
    <wiggly-button @click.native='show' text='Contact me'></wiggly-button>
    <social-buttons></social-buttons>
    <contact-modal></contact-modal>
  </div>
</template>

<script>
import {
  VueTyper
} from 'vue-typer';

import Navigation from './Navigation';
import WigglyButton from './WigglyButton';
import ContactModal from './ContactModal';
import SocialButtons from './SocialButtons';

export default {
  name: 'landing',
  data () {
    return {
      delay: 50,
      msg: ['import {webdev, embedded, iot} from \'skills\'', '#include <skills.hpp>', 'from skills import webdev, embedded, iot', 'import shockthewolf.com.skills.*;']
    };
  },
  methods: {
    show () {
      this.$modal.show('contact-form');
    }
  },
  components: {
    VueTyper,
    Navigation,
    WigglyButton,
    ContactModal,
    SocialButtons
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/colors.scss';
@import '../styles/mixins.scss';

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

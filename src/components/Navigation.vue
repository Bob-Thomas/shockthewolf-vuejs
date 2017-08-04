<template>
  <div class="button-container text-center">

    &lt;

    <router-link to='webdev'>webdev</router-link>,

    <router-link to='embedded'>embedded</router-link> &gt;
  </div>
</template>

<script>
export default {
  name: 'navigation'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/colors.scss';

.button-container {
  font-size: 3vmax;
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

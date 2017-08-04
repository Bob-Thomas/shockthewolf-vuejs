<template>
  <main>
    <button>
      {{text}}
    </button>
  </main>
</template>

<script>
export default {
  name: 'wigglyButton',
  props: ['text']
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/colors.scss';
button {
  display: block;
  background: transparent;
  font-size: 2vmax;
  padding: 20px;
  margin: 15vh auto;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #fff;
  @include transition(all 0.5s ease);
  color: #fff;
  &:hover {
    border-color: $color-typer;
    color: $color-typer;
    @include animation(shakeThatBooty 0.3s linear 1);
  }
}

@keyframes shakeThatBooty {
  33% {
    @include transform(rotateZ(10deg));
  }
  67% {
    @include transform(rotateZ(-10deg));
  }
  100% {
    @include transform(rotateZ(10deg));
  }
}
</style>

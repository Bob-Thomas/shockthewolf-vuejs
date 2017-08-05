<template>
  <div class="social-buttons">
    <a href='https://github.com/bob-thomas/' target='_blank'>
      <icon name="github" scale='5' label="Forked Repository" />
    </a>
    <a href='https://stackoverflow.com/users/3094496/bob-thomas?tab=profile' target='_blank'>
      <icon name="code" scale='5' label="Forked Repository"></icon>
    </a>
    <a href='https://www.linkedin.com/in/bob-thomas-58786564/' target='_blank'>
      <icon name="linkedin" scale='5' label="Forked Repository"></icon>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialButtons'
};
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
.social-buttons {
  text-align: center;
  .fa-icon {
    margin-left: 25px;
    margin-right: 25px;
    color: black;
    transition: 1s color;
    &:hover {
      color: $color-typer;
    }
  }
}
</style>

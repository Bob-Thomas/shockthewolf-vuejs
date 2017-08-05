<template>
  <div>
    <h2 class="text-center"> PROJECTS </h2>
    <article class="projects">
      <section class='project' :key='project.name' v-for='project in projects'>
        <div class="inner">
          <img src="http://lorempixel.com/250/250/technics" />
          <div class="title">{{project.name}}</div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'dave',
  data () {
    return {
      projects: [
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        },
        {
          name: 'softwear'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  .project {
    position: relative;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    background-size: cover;
    flex: 1;
    min-width: 250px;
    height: 250px;
    .inner {
      position: absolute;
      left: 10px;
      right: 10px;
      top: 10px;
      bottom: 10px;
      overflow: hidden;

      &:hover .title {
        margin-bottom: 0;
      }
      img {
        width: 100%;
      }
      .title {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: -50px;
        background: #000;
        background: rgba(0, 0, 0, 0.5);
        color: #FFF;
        padding: 10px;
        text-align: center;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
      }
    }
  }
}
</style>

<template>
  <modal name='contact-form'>
    <form id="form" class="topBefore">

      <input id="name" v-model="name" type="text" placeholder="NAME">
      <input id="email" v-model="email" type="text" placeholder="E-MAIL">
      <textarea id="message" v-model="message" type="text" placeholder="MESSAGE"></textarea>
      <input id="submit" type="button" value="GO!" @click='send'>
    </form>
  </modal>
</template>

<script>
import apostle from 'apostle.io';
apostle.domainKey = '48df2aaee6d64be31913da91b77259a83372d8c9';
export default {
  name: 'contactModal',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    send () {
      apostle.deliver('contact', { email: 'bobthomas295@gmail.com', sender_email: this.email, text: this.message, name: this.name });
      this.email = '';
      this.name = '';
      this.message = '';
      this.$modal.hide('contact-form');
    }
  }
};
</script>

<style lang="scss">
@import '../styles/colors.scss';


.v--modal-box {
  height: auto !important;
  background: $color-primary-0 !important;
}

#form {
  width: 100%;
}

input {
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  width: 94.5%;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #726659;

  border: solid 1px #b3aca7;
  border-bottom: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: $color-primary-2;
  color: #e2dedb;
}

textarea {
  width: 94.5%;
  width: 94.5%;
  height: 110px;
  max-height: 110px;
  padding: 15px;

  background: transparent;
  outline: none;

  color: #726659;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;

  border: solid 1px #b3aca7;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: $color-primary-2;
  color: #e2dedb;
}

#submit {
  width: 100%;

  padding: 0;
  margin: -5px 0px 0px 0px;

  font-family: 'Lato', sans-serif;
  font-size: 0.875em;

  outline: none;
  cursor: pointer;

  border: solid 1px #b3aca7;
  border-top: none;
}

#submit:hover {
  background: $color-primary-2;
}
</style>

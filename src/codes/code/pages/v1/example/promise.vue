<template>
<Example v-bind:innerHtml="exampleContent" v-bind:pageTitle="title"></Example>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Example from "../../../components/example.vue";
@Component({
  components: {
    Example
  }
})
export default class extends Vue {
  exampleContent = `%3Cpre%3E%3Ccode%3Evar%20Connection%20=%20new%20JsStore.Instance('Demo');%0AConnection.select(%7B%0A%20%20%20%20From:%20%22Customers%22,%0A%7D)%0A.then(function%20(results)%7B%0A%20%20%20%20log(results);%0A%7D)%0A.catch(function%20(error)%20%7B%0A%20%20%20%20alert(error._message);%0A%7D);%0A%3C/code%3E%3C/pre%3E`;
  title="Promise";
}
</script>

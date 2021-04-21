<template>
  <div class="">
    <DashHeader title="B-Shield" />
    <div class="container">
      <br />
      <DashboardComponent />
    </div>
  </div>
</template>

<script>
import DashboardComponent from "../components/Dashboard";
import DashHeader from "../components/DashHeader";
export default {
  name: "Dashboard",
  components: {
    DashboardComponent,
    DashHeader,
  },
};
</script>
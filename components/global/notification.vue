<template>
  <notifications
    group="global"
    position="top right"
    :duration="2500"
    :speed="700"
    :close-on-click="true"
    :max="10"
    classes="custom"
  />
</template>

<script>
export default {};
</script>

<style>
.custom {
  margin: 2px;
  margin-right: 5px;
  margin-bottom: 1;
  border-radius: 2px;
  font-size: 14px;
  padding: 5px 20px;
  color: #ffffff;
}

.notification-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 15px;
  color: #ffffff;
}
</style>

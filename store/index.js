import Vue from "vue";
import allmenus from "~/data/sidebar-menus.json"
export const state = () => ({
    services: [],
    activeService: {},
    menus: [],
    // otherMenus: otherMenus,
  });


  export const mutations = {
    setServices(state, services) {
      state.services = services;
    },
    setActiveService(state, service) {
      state.activeService = service;
    },
    setMenus(state, menus) {
        // console.log("setmenus",this.$notify())
      state.menus = allmenus;
      
      this.$router.push('/dashboard')
      Vue.notify({
        group: "global",
        title: "Success",
        text: `Successfully logged in!`,
        type: "success",
      });
    },
  };

  export const actions = {
    selectAllowedServices(vuexContext) {

    },
    selectMenus(vuexContext, menus) {
        vuexContext.commit("setMenus", allmenus);
    },
    selectActiveService(vuexContext, service) {
      vuexContext.commit("setActiveService", service);
  },
}
  
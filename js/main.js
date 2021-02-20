var App = new Vue({
  el: "#app",
  data() {
    return {
      grid: []
    }
  },
  async beforeMount(){
    await this.runTests()
    gm = new GridManager();
    this.reset(gm)
  },
  mounted(){ 
    console.log("aaaaaaaaa");
  },
  computed: {

  },
  methods: {
    clicked(i, j){
      Vue.set(this.grid[i], j, 0)
      //this.grid[i][j] = 2
    },
    async reset(gm){
      this.gm = gm
      this.grid = gm.generateGrid()
      await this.$nextTick(() => {});
    },
    async runTests(){
      runEventsTests(this);
      runFillingTests(this);
      await runGridTests(this);
    }
  }
});
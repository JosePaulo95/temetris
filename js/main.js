var App = new Vue({
  el: "#app",
  data() {
    return {
      grid: []
    }
  },
  async beforeMount(){
    await this.runTests()
    gm = new GameManager();
    this.reset(gm)
  },
  mounted(){ 
    console.log("aaaaaaaaa");
  },
  computed: {

  },
  methods: {
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
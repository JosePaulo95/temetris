var App = new Vue({
  el: "#app",
  data() {
    return {
      grid: []
    }
  },
  beforeMount(){
    this.runTests()
    gm = new GameManager();
    this.reset(gm)
  },
  mounted(){ 
    
  },
  computed: {

  },
  methods: {
    reset(gm){
      this.gm = gm
      this.grid = gm.generateGrid()
    },
    runTests(){
      runEventsTests(this);
      runFillingTests(this);
      runGridTests(this);
    }
  }
});
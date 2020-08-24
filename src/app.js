import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el:'#app',
      data: {
          todos: [
              {thing:"Do Homework", priority: "high"}, 
              {thing:"Make Dinner", priority: "low"}, 
              {thing:"Sleep for 14 hours", priority:"high"}
            ],
          item: "",
          priority: ""
      },
      methods:{
          addItem: function(){
              this.todos.push({
                  thing:this.item,
                  priority:this.priority
                });
              this.item = "";
              this.priority="";
          }
      }
  });
});
Vue.component('memo-component',{
    //임의로 생성해 준 속성, 변수
    props : ['id','colorid'],
    template : 
    `<div>
        <h3>
            메모
            <button @click="deletememo">X</button>
        </h3>
        <slot></slot>
        <p>{{time}}</p>
    </div>`,
    data : function() {
        return {
            time : new Date()
        };
    },
    methods : {
        deletememo : function() {
            this.$emit("delete", this.id );
        }
    }
})
Vue.component('memo-component',{
    props : ['id'],
    template : 
    `<div>
        <h3>
            메모
            <button @click="deletememo">X</button>
        </h3>
        <p>{{time}}</p>
        <slot></slot>
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
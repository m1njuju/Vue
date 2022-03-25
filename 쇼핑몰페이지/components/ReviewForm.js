Vue.component('review-form',{
    data : function() {
        return {
            name : '',
            review : '',
            rating : null,
            recommend : null
        }
    },
    methods : {
        onsubmit : function() {

            let productReview = {
                name : this.name,
                review : this.review,
                rating : this.rating,
                recommend : this.recommend
            }
            this.$emit('submit-review',productReview)
        }
    },
    template : `
    <form class="review-form" v-on:submit.prevent="onsubmit" >
        <h3>리뷰를 남기세요</h3>
        <label for="name">이름:</label>
        <input v-model="name">

        <label for="review">리뷰:</label>
        <textarea cols="30" rows="10" v-model="review"></textarea>

        <label for="rating">별점</label>
        <select v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommend">이 물건을 추천하나요?</label>
        <select v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>

        <input class="button" type="submit" value="Submit">
    </form>
    `
})
Vue.component('review-list',{
    props : ['reviews'],
    template :`
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="review in reviews">
            {{ review.name }} 님이 {{ review.rating}} 별점을 주었습니다<br>
            {{ review.review }}<br>
            Recommended: {{review.recommend}}
            </li>
        </ul>
    </div>
    `
})
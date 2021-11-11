<template>
    <div>
        <button @click="createTodo">추가</button>
        <input
        :value="title"
        :placeholder="placeholder"
        type="text"
        @input="title = $event.target.value"
        @keypress.enter="createTodo"
        />
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: '',
            placeholder: '할 일을 추가하세요.'
        }
    },
    methods: {
        createTodo () {
            const validatedTitle = this.title && this.title.trim()
                if (!validatedTitle) { // !를 붙이면 윗줄이 true일때(값이 있을때) false가 되는것 아닌지?
                    alert('유효하지 않는 제목입니다.')
                    this.title = this.title.trim()
                    return
                }

            this.$emit('create-todo', this.title)
            this.title = ''
        }
    }
}
</script>

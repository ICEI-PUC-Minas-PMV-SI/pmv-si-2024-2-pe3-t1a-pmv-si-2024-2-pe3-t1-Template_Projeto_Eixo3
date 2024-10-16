class Forum {

    static postsCount = 1;

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.content = [
            {
                id: 1,
                title: 'Boas-vindas ao nosso Fórum',
                content: 'Fique à vontade para fazer suas publicações e engajar com nossa comunidade',
                comments: [
                    {
                        id: 1,
                        content: 'Esse é o primeiro comentário no post',
                        author: 5,
                    }
                ],
            }
        ];
    }

    createPost(title, content) {
        this.content.push({
            id: ++this.postsCount, title, content, comments: []
        });

        return // vamos ver o q compete retornar
    }

    deletePost(id) {
        deleted_post = this.content.find(post => post.id == id)
        this.content = this.content.filter(post => post.id !== id)
        return deleted_post
    }

    viewPost(postId) {
        return this.forum.find(post => post.id === postId);
    }
}

export {
    Forum
}
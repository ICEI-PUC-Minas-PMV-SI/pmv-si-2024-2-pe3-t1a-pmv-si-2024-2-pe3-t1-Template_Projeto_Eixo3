async function getPostContent(postId) {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/posts/${postId}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function getPostComments(postId) {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/comments?post_id=${postId}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function loadPostContent() {
	try {
		const postId = sessionStorage.getItem("post_id");
		const post = await getPostContent(postId);
		const comments = await getPostComments(postId);
		await renderPost(post, comments);
	} catch (error) {
		throw new Error(error);
	}
}

async function renderPost(post, comments) {
	const postContainer = document.querySelector("#post__content-container");

	let htmlContent = `
        <div class="post-content__main">
                <span>${post.title}</span>
                <span>${post.content}</span>
                <div class="forum__options--first">
                <i class="clickableIcon" onclick="likesInteraction('${post.id}', ${post.likes}, 'like')"  ><img src="../img/svg/arrow-up.svg"></i>
                <span>${post.likes}</span>
                <i class="clickableIcon" onclick="likesInteraction('${post.id}', ${post.likes}, 'dislike')" ><img src="../img/svg/arrow-down.svg"></i>
            </div>
        </div>`;

	if (comments.length > 0) {
		for (let i = 0; i < comments.length; i++) {
			htmlContent += `
                <div class="post-content__comment" >
                    <div class="post-content__user-icon" >
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="post-content__comment-items">
                        <span>${comments[i].author}</span>
                        <span>${comments[i].body}</span>
                    </div>
                </div>`;
		}
	}

	postContainer.innerHTML = htmlContent;
}

async function addComment() {
	try {
		const postId = sessionStorage.getItem("post_id");
		const author = document.querySelector("#post-content__comment-author").value;
		const body = document.querySelector("#post-content__comment-body").value;

		if (author.length === 0 || body.length === 0) {
			return alert("Preencha todos os campos corretamente");
		}

		const comment = {
			post_id: postId,
			author,
			body,
		};

		const res = await fetch("https://api-storage-baoba.vercel.app/comments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(comment),
		});
		const data = await res.json();
		return data;
	} catch (error) {
        console.log(error)
		throw new Error(error);
	}
}

async function likesInteraction(id, likes, action) {
	switch (action) {
		case "like":
			likes++;
			await patchPostLikes(id, likes);
			break;
		case "dislike":
			likes--;
			await patchPostLikes(id, likes);
			break;
	}
}

async function patchPostLikes(id, likes) {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/posts/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ likes: likes }),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

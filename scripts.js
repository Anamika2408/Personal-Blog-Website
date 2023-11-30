const blogList = document.getElementById('blog-list');
const blogContent = document.getElementById('blog-content');
const newPostBtn = document.getElementById('new-post-btn');

let blogs = [];

newPostBtn.addEventListener('click', () => {
    const title = prompt('Enter the title for your new blog:');
    const content = prompt('Write your blog content:');

    if (title && content) {
        const blog = {
            title,
            content,
        };

        blogs.push(blog);
        displayBlogs();
    } else {
        alert('Please enter both title and content for your blog.');
    }
});

function displayBlogs() {
    blogList.innerHTML = '';

    blogs.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `<h3>${blog.title}</h3><button onclick="viewBlog(${index})">Read</button><button onclick="editBlog(${index})">Update</button><button onclick="deleteBlog(${index})">Delete</button>`;
        blogList.appendChild(blogItem);
    });
}


function viewBlog(index) {
    const selectedBlog = blogs[index];
    blogContent.innerHTML = `<h2>${selectedBlog.title}</h2><p>${selectedBlog.content}</p>`;
    blogContent.style.display = 'block';
}

function editBlog(index) {
    const updatedTitle = prompt('Update the title:', blogs[index].title);
    
    if (updatedTitle !== null) {
        const updatedContent = prompt('Update the content:', blogs[index].content);

        if (updatedContent !== null) {
            blogs[index] = {
                title: updatedTitle,
                content: updatedContent,
            };

            displayBlogs();
            viewBlog(index);
        } else {
            alert('Update canceled. Content will remain unchanged.');
        }
    } else {
        alert('Update canceled. Title will remain unchanged.');
    }
}



function deleteBlog(index) {
    const confirmation = confirm('Are you sure you want to delete this blog?');

    if (confirmation) {
        blogs.splice(index, 1);
        displayBlogs();
        blogContent.style.display = 'none';
    }
}

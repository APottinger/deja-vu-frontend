class Comment{
    constructor(comment){
        this.user_id = comment.user_id
        this.content = comment.content
        this.id = comment.id
    }

        //get
    static getComments(){
            
            fetch('http://127.0.0.1:3000/comments')
            .then(resp => resp.json())
            .then(comments => {
                console.log(comments)
                for (const comment of comments){
                    let cmt = new Comment(comment)
                    cmt.renderComment()
                    }
            })
      
        }
        
        renderComment(newComment){
            const div = document.createElement('div')
            div.className = 'cmt-wrapper'

            const ul = document.createElement('ul')
            ul.className = "cmt-list"

            const li = document.createElement('li')
            li.dataset.id = this.id
            li.innerHTML += `${this.content}`

            const deleteBtn = document.createElement('button')
            deleteBtn.innerText = 'delete'
            deleteBtn.addEventListener('click', this.deleteComment)
           
            const editBtn = document.createElement('button')
            editBtn.innerText = 'edit'
            editBtn.addEventListener('click', this.editComment)
            
            
            li.append(editBtn, deleteBtn)
            ul.appendChild(li)
            div.appendChild(ul)
            document.body.appendChild(div)
   
        }


        deleteComment(){
            
            const userId = this.parentElement.dataset.id
            
            fetch(`http://127.0.0.1:3000/comments/${userId}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(() => location.reload())
    
            
        }
    

}



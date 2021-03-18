class User{
    constructor(user){
        this.id = user.id
        this.username = user.username
        this.email = user.email
        this.comments = user.comments
    }

    renderUser(newUser){  
        
        let person = this.id
        let newDiv = document.createElement('div')
        newDiv.className = "user-wrapper"
        let newList = document.createElement('ul')
        let newLi = document.createElement('li')
        newLi.className = 'user-li'
        newLi.dataset.id = this.id
        newLi.innerText = this.username

        newList.appendChild(newLi)
        newDiv.appendChild(newList)
        document.body.append(newDiv)
        
        newUser.renderCommentForm(newUser)
    
    }

    renderCommentForm(){
        
        userForm.style.display = "none";
        const commentForm = document.createElement('form')

        commentForm.innerHTML += `<form>
        <input type="textbody" placeholder="write a comment...">
        <input type="submit">
        </form>`
        commentForm.className = 'comment-form'
        document.querySelector('.user-li').appendChild(commentForm)
        commentForm.addEventListener('submit', (e)=> {
            e.preventDefault()
                 
            let cmtInput = e.target.children[0].value
            const userId = parseInt(e.target.parentElement.dataset.id)
            
            const configObj = {
                method: "POST",
                    headers: {
                        "Content-Type": 'application/json',
                        'Accept': 'application/json'
                    },
                body: JSON.stringify({content: cmtInput, 
                    user_id: userId})
                
            }
            
            fetch('http://127.0.0.1:3000/comments', configObj)
            
            .then(res => res.json())
            .then(comment => {
            let newComment = new Comment(comment)
            newComment.renderComment(userId)
             e.target.reset()
            })
        })
    }
}
    
    
    /* getUser(){
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(users => { 
            for (const user of users){
                let u = new User(user.id, user.username, user.email)
                //console.log(u)
            }
            User.renderUser()
        })
    } */



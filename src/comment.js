class Comment{
    constructor(comment){
        this.user_id = comment.user_id
        this.content = comment.content
        this.id = comment.id
    }

        //post
    static submitComment(e){
            debugger
            e.preventDefault()         
            let cmtInput = e.target.children[0].value
            let comment = {
                content: cmtInput
            }
            const configObj = {
                method: "POST",
                    headers: {
                        "Content-Type": 'application/json',
                        'Accept': 'application/json'
                    },
                body: JSON.stringify(comment)
                
            }
            debugger
            fetch('http://127.0.0.1:3000/comments', configObj)
       
            e.target.reset()
        }

        renderComment(newComment){
            const div = document.createElement('div')
            div.className = 'cmt-wrapper'

            const ul = document.createElement('ul')
            ul.className = "cmt-list"

            const li = document.createElement('li')
            li.dataset.id = this.id
            li.innerHTML += this.content

            ul.appendChild(li)
            div.appendChild(ul)
            document.body.appendChild(div)

        }

}



//Parameters: {"content"=>"", "comment"=>{"content"=>""}}
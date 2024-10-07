
const config = require('config')
const {News, Developers} = require('../models/models')

class NewsService {
    async getNews(){
        try{
            const news = await News.findAll()
            console.log(news)
            return news
        }catch(e){
            console.log(e)
        }

    }

    async createPost(post){
        console.log(post)
        const name = post.post.name
        const desc = post.post.desc
        const text = post.post.text
        const image = post.post.image
        const publ = post.post.public
        try{
            const post = await News.create({title: name, desc: desc, image: image, public: publ, text: text })
            return post
        }catch(e){
            console.log(e)
        }


    }


}
module.exports = new NewsService()

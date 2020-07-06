import axios from "axios";

const instance = axios.create({
    baseURL:`http://localhost:3020/`
})

export const AppleAPI ={

    getApple(){
        return instance.get(`apple/`).then(response=>{
            return response.data
        })
    },
    getOneApple(id){
        return instance.get(`apple/`+id).then(response=>{
            return response.data
        })
    }

}

export const XiaomiAPI ={

    getXiaomi(){
        return instance.get(`xiaomi`).then(response=>{
            return response.data
        })
    },
    getOneXiaomi(id){
        return instance.get(`xiaomi/`+id).then(response=>{
            return response.data
        })
    }

}

export const DescriptionAPI={
    getDescription(){
        return instance.get(`description`).then(response=>{
            return response.data
        })
    }
}

export const BasketAPI={
    getBasket(){
        return instance.get(`basket`).then(response=>{
            return response.data
        })
    },
    addInBasket(name,photo,price,id){
        return instance.post(`basket`,{name:name,photo:photo,price:price,count:1,productId:id}).then(response=>{
            return response.data
        })
    },
    deleteInBasket(id){
        return instance.delete(`basket/`+id).then(response=>{
            return response.data
        })
    },
    countBasket(id,count){
        return instance.patch(`basket/`+id,{count:count}).then(response=>{
            return response.data
        })
    }
}

export const FeedBackAPI={
    getFeedBack(){
        return instance.get(`feedBack`).then(response=>{
            return response.data
        })
    },
    addFeedBack(name,id,feedBack,rating,date){
        return instance.post(`feedback`,{name:name,productId:id,feedBack:feedBack,rating:rating,date:date})
    }
}
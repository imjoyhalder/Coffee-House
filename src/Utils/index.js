import toast from "react-hot-toast"

// get all coffees from local storage
const getAllFavorite = () => {
    const all = localStorage.getItem('favorite')
    if (all) {
        const favorite = JSON.parse(all)
        return favorite
    }
    else {
        return []
    }
}

//  add a coffee to the local storage 
const addFavorite = (coffee) => {
    // get all previously saved coffee data
    const favorite = getAllFavorite()
    const isExist = favorite.find(item => item.id == coffee.id)
    if (isExist){
        return toast.error('Coffee Already Exists',{
            position: "top-right"
        })
    }
    else {
        favorite.push(coffee)
        const newData = JSON.stringify(favorite)
        localStorage.setItem('favorite', newData)
        toast.success('Coffee Successfully Added', {
            position: "top-right"
        })
    }

}

// remove a coffee from local storage



export { addFavorite, getAllFavorite }
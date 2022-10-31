export const getImagesAPi = async() => {
   const data =  await fetch("https://dog.ceo/api/breeds/image/random") 
    return  await  data.json()
     
    
}
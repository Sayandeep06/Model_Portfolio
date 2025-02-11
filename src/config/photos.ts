import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
// Import all your photos here

export const photos = [
  {
    id: 1,
    src: pic1,
    alt: "Ekta Portrait 1",
    category: "portraits"
  },
  {
    id: 2,
    src: pic2,
    alt: "Ekta Portrait 2",
    category: "portraits"
  },
  {
    id: 3,
    src: pic3,
    alt: "Ekta Fashion 1",
    category: "fashion"
  },
  {
    id: 4,
    src: pic4,
    alt: "Ekta Fashion 2",
    category: "fashion"
  },
  // Add more photos here
]

// You can also organize photos by category if needed
export const getPhotosByCategory = (category: string) => {
  return photos.filter(photo => photo.category === category)
}

export const heroImage = pic2 // Your hero section image 
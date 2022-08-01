import axios from "axios"
import { ICard, IUser, IPost, IPhoto } from "../types"

const postStart: number = 5
const postEnd: number = 15
const postCount: number = 100
const photoCount: number = 50
const userCount: number = 10

const getRandomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start + 1) + start)
}
const getPosts = () => {
  const count = getRandomNumber(postStart, postEnd)
  const arr = Array(count).fill(0)
  return arr.map(() => Math.floor(Math.random() * postCount + 1))
}

export const fetchData = (): Promise<ICard>[] => {
  const randomPosts = getPosts()
  return randomPosts.map(async (key: number) => {
    const userId = key === postCount ? userCount : Math.floor(key / userCount) + 1;
    const photoId = getRandomNumber(1, photoCount) + (photoCount * (userId - 1))
    const { name: author, company: { name: company } }: IUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.data)
    const { title, body }: IPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${key}`).then(res => res.data)
    const { thumbnailUrl: photo }: IPhoto = await axios.get(`https://jsonplaceholder.typicode.com/albums/${userId}/photos?id=${photoId}`).then(res => res.data[0])
    return {
      author,
      company,
      title,
      body,
      photo,
    }
  })
}
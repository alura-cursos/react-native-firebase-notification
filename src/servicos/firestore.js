import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore"

export async function salvarPost(data){
  try {
    const result = await addDoc(collection(db, 'posts'), data)
    return result.id
  } catch(error){
    console.log('Erro add post:', error)
    return 'erro'
  }
}

export async function pegarPosts(){
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    let posts = []
    querySnapshot.forEach((doc) => {
      let post = {id: doc.id, ...doc.data()}
      posts.push(post)
    });
    return posts
  }catch(error){
    console.log(error)
    return []
  }
}

export async function pegarPostsTempoReal(setposts){
  const ref = query(collection(db, "posts"))
  onSnapshot(ref, (querySnapshot) => {
    const posts = []
    querySnapshot.forEach(( doc ) => {
      posts.push({id: doc.id, ...doc.data()})
    })
    setposts(posts)
  })
}

export async function atualizarPost(postID, data){
  try {
    const postRef = doc(db, "posts", postID);
    await updateDoc(postRef, data)
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}

export async function deletarPost(postID){
  try {
    const postRef = doc(db, "posts", postID);
    await deleteDoc(postRef)
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}
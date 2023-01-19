import firestore from '@react-native-firebase/firestore';


export async function salvarPost(data){
  try {
    const result = await firestore().collection('posts').add(data)
    return result.id
  } catch(error){
    console.log('Erro add post:', error)
    return 'erro'
  }
}

export async function pegarPostsTempoReal(setposts){
  firestore().collection('posts').onSnapshot((querySnapshot) => {
    const posts = []
    querySnapshot.forEach(( doc ) => {
      posts.push({id: doc.id, ...doc.data()})
    })
    setposts(posts)
  })
}

export async function atualizarPost(postID, data){
  try {
    await firestore().collection('posts').doc(postID).update(data)
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}

export async function deletarPost(postID){
  try {
    await firestore().collection('posts').doc(postID).delete()
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}
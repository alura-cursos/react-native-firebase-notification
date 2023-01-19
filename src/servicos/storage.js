import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

export async function salvarImagem(imagem, imagemNome){
  if(!imagem) return;
  
  const downloadImagem = await fetch(imagem)
  const blobImagem = await downloadImagem.blob()

  const imagemRef = ref(storage, `posts/${imagemNome}.png`)

  try {
    await uploadBytes(imagemRef, blobImagem);
    const url = await getDownloadURL(imagemRef);
    return url;
  }
  catch(error) {
    console.log(error)
    return null;
  }
}

export async function deletarImagem(postId){
  const refStorage = ref(storage, `posts/${postId}.png`);
  try {
    await deleteObject(refStorage);
    return true;
  }
  catch(error){
    console.log(error)
    return false;
  }
}
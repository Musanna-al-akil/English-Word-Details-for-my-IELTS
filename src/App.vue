<script setup>
import { ref,reactive, onMounted } from 'vue';
import db from './firebase/init';
import {collection, addDoc,doc,setDoc,getDocs, query,orderBy} from 'firebase/firestore';

const word = ref('');
const words = reactive({store:[]});

function filteredList() {
  return words.store.filter((w) => 
  w.Name.toLowerCase().includes(word.value.toLowerCase())
  ).slice(0,5);
}

async function updateData(){
  const q = query(collection(db,'words'),orderBy('Name'));
  const querySnap = await getDocs(q);

  words.store =[];
  querySnap.forEach((doc) => {
        words.store.push(doc.data())
      });
}

async function create(){
if(word.value){
  const colRef = collection(db,'words');

  const data = {
    Name:word.value,
  }
  const docRef = await addDoc(colRef,data);
  word.value='';
  updateData();
}
}

onMounted(updateData);
//if database is big enough use this method

// const bookDoc= {
//   title: book.title,
//   title_lower: book.title.toLowerCase(),
//   title_partial: this.partialTitle(book.title)
// };
// function partialTitle(title){
//   const parts = title.split(' ');
//   if (parts.length > 1) {
//     parts.shift();
//     return parts.join(' ').toLowerCase();
//   } else {
//     return title.toLowerCase();
//   }
// }

// function search(term){
//   term = term.toLowerCase();
//   // search both title_lower and title_partial
//   const title =collection('words', ref =>
//     ref.orderBy('word_lower').startAt(term).endAt(term + '\uf8ff')
//   ).valueChanges();
//   const partial =collection('words', ref =>
//     ref.orderBy('word_partial').startAt(term).endAt(term + '\uf8ff')
//   ).valueChanges();
//   return merge(title, partial).pipe(
//     pairwise(),
//     map(([title, partial]) => {
//       const result = [...title, ...partial];
//       // dedupe
//       return result.filter((thing, index, self) =>
//         index === self.findIndex((t) => t.title === thing.title)
//       );
//     })
//   );
// }
</script>
<template>
  <div>
    <input type="text" v-model="word">
    <br>
    <button @click.prevent="create" class="mt-4 text-lime-300 bg-slate-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">Create</button>
    <ul >
      <li class="card bg-slate-400 mt-3 p-2" :key="word" v-for="word in filteredList()">
      {{ word.Name }}
      </li>

    </ul>
  </div>
</template>

<style scoped>

</style>

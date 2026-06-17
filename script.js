const  notesInput= document.getElementById('notesInput');
const addBtn= document.getElementById('addBtn');
const notesContainer= document.getElementById('notesContainer');

loadNotes();

addBtn.addEventListener('click', function(e){
 e.preventDefault();

 const text= notesInput.value;
 if(text===''){
    alert('write somethings!');
    return;
 }

 createNote(text);
 saveNotes();
 notesInput.value='';
});

function createNote(text){
 const newNote= document.createElement('div');
 newNote.className='note'; 
 
 const noteText=document.createElement('p');
 noteText.textContent=text;

 const delBtn=document.createElement('button');
 delBtn.textContent='X';
 delBtn.className='delete-btn';

  delBtn.addEventListener('click', function(){
    newNote.remove();
  });
  newNote.appendChild(noteText);
  newNote.appendChild(delBtn);
  notesContainer.appendChild(newNote);
}
  function saveNotes(){
const notes=[];
document.querySelectorAll('.note p').forEach(note=>{
    notes.push(note.textContent);
});
localStorage.setItem('myNotes', JSON.stringify(notes));
  }

  function loadNotes(){
    const notes= JSON.parse(localStorage.getItem('myNotes'))||[];
    notes.forEach(text=> createNote(text));
  }


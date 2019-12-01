const fs=require(`fs`)
const chalk=require(`chalk`)
//const getNotes=()=> (`Your notes...`)
const addNote=(title,body)=>{
    const notes=loadNotes()
  //  const duplicate=notes.filter((note)=>note.title===title)  //Data will be added into duplicate array only if the return is true
  const duplicate=notes.find((note)=>note.title===title)//using find() method
    if(!duplicate)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(`Note added`)
    }
    else
    {
        console.log(`Failed to add note. Title already exists!`)
    }
   
}
const removeNote=(title)=>
{
    
    const notes=loadNotes()
    const rem=notes.filter(function(note){
        return note.title!==title
    })
    
    if(rem.length<notes.length){
        console.log(chalk.bgBlack.red.bold(`Note deleted`))
        saveNotes(rem)
    }
    else
        console.log(chalk.bgBlack.red.inverse.bold(`Invalid title`))
    
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.bgWhite.red.bold(`Your notes are:`))
    for(const n of notes ){
        console.log(n.title)
    }
}
const readNote=(title)=>{
    const notes=loadNotes()
    const read=notes.find((note)=>note.title===title)
    if(read)
    {
        console.log(chalk.bgBlack.blue.bold(read.title),read.body)    
    }
    else{
        console.error(chalk.red.bold(`Invalid entry`))
    }

}
const saveNotes=(notes)=>
{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync(`notes.json`,dataJSON)
    // const notesBuffer=fs.readFileSync(`notes.json`)
    // const notesData=notesBuffer.toString()
    // return JSON.parse(notesData)
}
const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync(`notes.json`)
        const dataJSN=dataBuffer.toString()
        return (JSON.parse(dataJSN))
    }
    catch (e){
        return []
    }
}
    


module.exports={
 //   getNotes:getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
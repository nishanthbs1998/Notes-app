const chalk=require(`chalk`)
const yargs=require(`yargs`)
const notes=require(`./notes.js`)
console.log(chalk.blue.bgBlack.underline.inverse.bold(`SUCCESS!!`))

yargs.version(`1.1.0`)


//Adding a note
yargs.command({
    command: `add`,
    description: `Add a new note`,
    builder:{
        title:{
            description: `Note title`,
            demandOption: true,
            type: `string`
        },

        body: {
            description: `Body of the Note`,
            demandOption: true,
            type: `string`
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Removing a note
yargs.command({
    command: `remove`,
    description: `Remove a note`,
    builder:{
        title:{
            description: `Note title`,
            demandOption: true,
            type: `string`
        }
    },
    handler(argv){
      notes.removeNote(argv.title)  
    }
})

//Listing notes
yargs.command({
    command: `list`,
    description: `List all the notes`,
    handler(argv){
        notes.listNotes(argv.title)
    }
})

//Read notes
yargs.command({
    command: `read`,
    description: `Read all the notes`,
    builder:{
        title:{description: `Title to search in the list`,
        type: `string`,
        demandOption: true}
        
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
console.log(yargs.argv)

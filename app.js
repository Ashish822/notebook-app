const getNotes = require("./notes.js");
const chalk = require("chalk");
const validator = require("validator");
const yargs = require("yargs");
const notes = require("./notes");
const { describe } = require("yargs");

yargs.command({
  command: "add",
  describe: "Adding a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log(argv);
    // console.log("Title :-> " + argv.title);
    // console.log("Body :-> " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: "Note title",
    demandOption: true,
    type: "string",
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();

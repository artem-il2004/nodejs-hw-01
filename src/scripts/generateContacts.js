import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const contactsList = await readContacts();
    const contatcsArray = Array(5).fill(0).map(createFakeContact);
    writeContacts([...contactsList, ...contatcsArray]);
};

generateContacts(5);

import { readContacts } from "../utils/readContacts";
import { writeContacts } from "../utils/writeContacts";
export const removeLastContact = async () => {
    const contactsList = readContacts();
    contactsList.pop();
    writeContacts(contactsList);
};

removeLastContact();

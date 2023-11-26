import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File | null | undefined) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "6555ef25b1728585c31b",
        ID.unique(),
        file
    );
    return fileUploaded;
}

export default uploadImage
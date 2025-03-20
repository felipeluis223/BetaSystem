import { auth, db } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

interface RegisterData {
    email: string;
    name: string;
    createdAt: Date;
}

// Função para criar usuário e armazenar no Firestore
export const registerUser = async (email: string, password: string, name: string): Promise<RegisterData> => {
    try {
        // Criar usuário com Firebase Auth
        const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Salvar os dados no Firestore
        const createdAt = new Date();
        await setDoc(doc(db, "users", user.uid), {
            name,
            email,
            createdAt: serverTimestamp(), // Timestamp do servidor
        });

        console.log("Usuário cadastrado com sucesso!");
        
        // Retornando um objeto do tipo RegisterData
        return { email, name, createdAt };
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        throw error;
    }
};

import { db } from "../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

// Função responsável por salvar novos dados de login ao Firebase:
export const saveUser = async (uid: string, email: string) => {
    try {
      await setDoc(doc(db, "users", uid), {
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      // throw error;
    }
  };
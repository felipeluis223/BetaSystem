// userService.ts
import { db } from "../../firebaseConfig";
import { auth } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export const saveUser = async (uid: string, email: string) => {
  try {
    await setDoc(doc(db, "users", uid), {
      email,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    throw error;
  }
};

export const login = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuário logado:", userCredential.user);
    return userCredential;
  } catch (error: any) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
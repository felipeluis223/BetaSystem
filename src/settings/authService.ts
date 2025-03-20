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
    // throw error;
  }
};

interface AuthError {
  status: number,
  message: string
}

export const login = async (email: string, password: string): Promise<UserCredential | AuthError> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error: any) {
    return  {
      status: 400,
      message: error || "Houve um problema no servidor..."
    }
  }
};
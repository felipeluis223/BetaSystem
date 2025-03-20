// userService.ts
import { db } from "../../firebaseConfig";
import { auth } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

interface AuthError {
  authentication: boolean,
  message: string
}

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

// Função responsável por realizar a autenticação para o login:
export const login = async (email: string, password: string): Promise<UserCredential | AuthError> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error: any) {
    return  {
      authentication: false,
      message: error || "Houve um problema no servidor..."
    }
  }
};
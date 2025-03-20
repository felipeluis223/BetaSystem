// userService.ts
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

interface AuthError {
  authentication: false;
  message: string;
};

interface AuthSuccess {
  authentication: true;
  userCredential: UserCredential; // Propriedade obrigatória em caso de sucesso
}

// Definição de um tipo unificado para login:
type AuthResponse = AuthSuccess | AuthError;

// Função responsável por realizar a autenticação para o login:
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      authentication: true,
      userCredential // Retorna corretamente o objeto UserCredential
    };
  } catch (error: any) {
    return  {
      authentication: false,
      message: error?.message || "Houve um problema no servidor..."
    };
  }
};
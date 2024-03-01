import { z } from "zod";

export const registerFormSchema = z.object({


    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z
        .string()
        .nonempty("A senha é obrigatório")
        .min(8, "São necessários pelo menos oito caracteres.")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
        .regex(/[0-9]+/, "É necessário pelo menos um número")
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/, "É necessário pelo menos um caracter especial"),
    confirmPassword: z.string().nonempty("Confirmar senha obrigatório"),
    bio: z.string().nonempty("Forneça sua descrição"),
    contact: z.string().nonempty("Forneça um contato obrigatório"),
    course_module: z.string().nonempty("Selecione um módulo obrigatório"),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
}); 
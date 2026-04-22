import { createServerFn } from "@tanstack/react-start";
import { loginSchema } from "../auth.schema";
import { AuthError } from "../auth.type";
import { findUserByEmail } from "./auth.db.server";

export const loginUser = createServerFn()
	.inputValidator(loginSchema)
	.handler(async ({ data }) => {
		const { email, password } = data;

		const user = findUserByEmail(email);

		if (!user) {
			throw new AuthError("USER_NOT_FOUND", "User not found");
		}

		if (password !== user.password) {
			throw new AuthError("INVALID_CREDENTIALS", "Invalid credentials");
		}

		return {
			id: user.id,
			email: user.email,
			role: user.role,
		};
	});

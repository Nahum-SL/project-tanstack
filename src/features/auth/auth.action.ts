import { createServerFn } from "@tanstack/react-start";
import { users } from "./auth.db.server";
import { loginSchema } from "./auth.schema";
import { loginService } from "./auth.service.server";
import {
	createSession,
	destroySession,
	getSession,
} from "./server/auth.session.server";

export const getMeAction = createServerFn().handler(async () => {
	const session = getSession();

	if (!session) return null;

	const user = users.find((u) => u.id === session);

	if (!user) return null;

	return {
		id: user.id,
		email: user.email,
		role: user.role,
	};
});

export const loginUser = createServerFn()
	.inputValidator(loginSchema)
	.handler(async ({ data }) => {
		const user = await loginService(data.email, data.password);

		createSession(user.id);

		return {
			id: user.id,
			email: user.email,
			role: user.role,
		};
	});

export const logoutAction = createServerFn().handler(async () => {
	destroySession();
	return { success: true };
});

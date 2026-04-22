import { getSession } from "./auth.session.server";

export function requireAuth() {
	const session = getSession();

	if (!session) {
		throw { code: "UNAUTHORIZED" };
	}

	return session;
}

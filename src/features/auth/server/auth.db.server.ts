import { users } from "../auth.db.server";

export function findUserByEmail(email: string) {
	return users.find((u) => u.email === email);
}

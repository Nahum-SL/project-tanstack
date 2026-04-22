import {
	deleteCookie,
	getCookie,
	setCookie,
} from "@tanstack/react-start/server";

const SESSION_NAME = "session";

export function createSession(userId: string) {
	setCookie(SESSION_NAME, userId, {
		httpOnly: true,
		secure: true,
		path: "/",
	});
}

export function getSession() {
	return getCookie(SESSION_NAME);
}

export function destroySession() {
	return deleteCookie(SESSION_NAME);
}

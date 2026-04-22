import { getMeAction, loginUser, logoutAction } from "./auth.action";

export function useAuth() {
	return {
		getMe: getMeAction,
		login: loginUser,
		logout: logoutAction,
	};
}

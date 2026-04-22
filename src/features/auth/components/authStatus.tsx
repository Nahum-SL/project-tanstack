"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../auth.hook";

export function AuthStatus() {
	const { getMe, logout } = useAuth();
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		getMe().then(setUser);
	}, [getMe]);

	if (!user) return <p>No autenticado</p>;

	return (
		<div>
			<p>Hola {user.email}</p>
			<button type="button" onClick={() => logout()}>
				Logout
			</button>
		</div>
	);
}

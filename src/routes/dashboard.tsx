import {
	createFileRoute,
	redirect,
	useLoaderData,
} from "@tanstack/react-router";
import { getMeAction } from "#/features/auth/auth.action";

export const Route = createFileRoute("/dashboard")({
	loader: async () => {
		const user = await getMeAction();

		if (!user) {
			throw redirect({
				to: "/login",
			});
		}

		return { user };
	},
	component: DashboardPage,
});

function DashboardPage() {
	const { user } = useLoaderData({ from: "/dashboard" });
	return <h1>Bienvenido {user.email}</h1>;
}

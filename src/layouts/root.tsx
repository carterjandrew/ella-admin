import { Box, Button, Card, Center, Flex, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFile, FaHome, FaPen } from "react-icons/fa";
import { Outlet } from "react-router";
import supabase from "../../utils/supabase";
import { Session } from "@supabase/supabase-js";
import { PasswordInput } from "@/components/ui/password-input";
import { InputGroup } from "@/components/ui/input-group";
import SignUp from "@/pages/signup";

export default function Root() {
	const [session, setSession] = useState<Session>()

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			if (!session) return
			setSession(session)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			if (!session) return
			setSession(session)
		})

		return () => subscription.unsubscribe()
	})
	if (!session) return (
		<SignUp />
	)
	return (
		<Flex
			w='100vw'
			h='100vh'
			maxW='100vw'
			maxH='100vh'
			flexDir='column'
		>
			<Center
				outline='solid'
				outlineWidth='thin'
				padding={1}
				gap={1}
			>
				<Button asChild>
					<a href='/'>
						<FaHome />
						ELLA Admin
					</a>
				</Button>
				<Box flex='1' />
				<Button asChild>
					<a href='/ella/forms'>
						<FaFile />
						Forms
					</a>
				</Button>
				<Button asChild>
					<a href='/ella/articles'>
						<FaPen />
						Articles
					</a>
				</Button>
			</Center>
			<Outlet />
		</Flex>
	)
}

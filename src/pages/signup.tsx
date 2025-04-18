import { Auth } from '@supabase/auth-ui-react'
import supabase from '../../utils/supabase'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function SignUp() {
	return (
		<Auth
			supabaseClient={supabase}
			appearance={{ theme: ThemeSupa }}
		/>
	)
}

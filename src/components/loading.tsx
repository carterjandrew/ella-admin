import { Center, Heading, Spinner } from "@chakra-ui/react"

type LoadingProps = {
	message: string
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
	return (
		<Center gap={4} padding={4} flexDir='column' w='100%' flex={1} minH={0}>
			<Spinner size='xl' />
			<Heading> {message}</Heading>
		</Center>
	)
}

export default Loading

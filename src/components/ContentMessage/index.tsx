interface PropsMessage {
    message: string;
};

export default function ContentMessage({ message }: PropsMessage){
    return (
        <h3>
            {message}
        </h3>
    )
};
import { AppProps } from "next/app";
import showdown from 'showdown';

const converter = new showdown.Converter();

type AboutProps = {
    content: string
} & AppProps

export async function getServerSideProps() {
    const res = await fetch('https://raw.githubusercontent.com/felicksLindgren/felicksLindgren/main/README.md');
    const content = converter.makeHtml(await res.text());
    return {
        props: {
            content: content
        }
    }
}

export default function About({ content }: AboutProps) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </>
    )
}
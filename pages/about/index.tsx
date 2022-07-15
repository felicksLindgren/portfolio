import { Breadcrumbs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AppProps } from "next/app";
import showdown from 'showdown';
import Link from "../../src/Link";

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
            {/* <Breadcrumbs sx={{ alignSelf: 'start' }}>
                <Link sx={{ textDecoration: 'none' }} color={'text.primary'} href="/">Home</Link>
                <Typography color={'text.primary'}>About</Typography>
            </Breadcrumbs> */}
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </>
    )
}
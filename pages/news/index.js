// For the requests to domain/news
import Link from 'next/link'
import { Fragment } from 'react';

export default function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextJS-is-a-great">
                        NextJS Is A Great Framework
                    </Link>
                </li>
                <li><a href="/news/something-else">
                    Something Else
                </a>
                </li>
            </ul>
        </Fragment>
    )
}

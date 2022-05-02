//domain.com/news/something-about-the-news
import { useRouter } from 'next/router'

export default function DetailPage() {
    const router = useRouter()
    const { newsId } = router.query
    // send a request to the backend API to fetch the news item with newsId

    return (
        <div>
            <h1>The Detail Page</h1>
        </div>
    )
}

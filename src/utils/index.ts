export const fetcher = async (
    responce: RequestInfo,
    init?: RequestInit
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
    const res = await fetch(responce, init)

    if (!res.ok) {
        // レスポンスが失敗した時に例外を投げる
        const errorRes = await res.json()
        const error = new Error(
            errorRes.message ?? 'APIリクエストにエラーが発生しました',
        )

        throw error
    }

    return res.json()
}
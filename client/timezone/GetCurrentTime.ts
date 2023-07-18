const GetTimeOffset = async (city: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_TIMEZONE_URL}/current_time/?api_key=${process.env.NEXT_PUBLIC_TIMEZONE_API_KEY}&location=${city}`)

    const data: GetTimeOffsetRes = await res.json()

    return data.gmt_offset
}

export default GetTimeOffset;
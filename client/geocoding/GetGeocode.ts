const GetGeocode = async (city: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GEOCODING_URL}/geocoding?city=${city}`, {
        headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_NINJA_API_KEY as string
        }
    })
    const data : GeoCodeInfoResponse[] = await res.json()

    const geoCodeInfos : GeocodeInfo[] = data.map(info => {
        return {
            id: Math.floor( Math.random() * 1500),
            name: info.name,
            country: info.country,
            lat: info.latitude,
            long: info.longitude,
        }
    })

    return geoCodeInfos
}

export default GetGeocode;
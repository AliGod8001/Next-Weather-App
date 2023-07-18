interface GetTimeOffsetRes {
    datetime: string,
    timezone_name: string,
    timezone_location: string,
    timezone_abbrevaition: string,
    gmt_offset: number,
    is_dst: boolean,
    requested_location: string,
    latitude: number,
    longitude: number
}
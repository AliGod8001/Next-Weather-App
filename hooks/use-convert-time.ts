const UseConvertTime = (offset: number) : Date => {
    const offsetTime = new Date(2023, 6, 18, new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds())
    return new Date(offsetTime.getTime() + offset * 60 * 60 * 1000)
}

export default UseConvertTime;
const useGetDay = (dateStr: string) => {
    var date = new Date(dateStr);
    return date.toLocaleDateString('en-EN', { weekday: 'long' });        
}

export default useGetDay;
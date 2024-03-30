export const useTime = (interval) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setTime(new Date());
        }, interval);

        return (() => { clearTimeout(timeoutId) });
    }, [time]);

    return time;

};

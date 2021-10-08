export const convertTime = (time) => {
    let result = '';
    let hour = parseInt(time.slice(0,2));
    if (hour > 12){
        hour = hour - 12;
        result = result + toString(hour) + ':' + time.slice(3) + 'PM';
    } else if (hour === 0){
        result = result + '12:' + time.slice(3) + 'AM';
    } else if (hour > 0 && hour < 10){
        result = result + time.slice(1) + 'AM';
    } else {
        result = result + time + 'AM';
    }
    return result;
}
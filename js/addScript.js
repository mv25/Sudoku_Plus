function timeConvert(sec)
{
    const date = new Date(sec * 1000);
    return date.toISOString().slice(11,19);
}
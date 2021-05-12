export const IS_DEV = process.env.NODE_ENV !== "production";

export const formatDate = (date, format = { weekday: "short", month: "long", day: "numeric" }) => {
    const date_time = new Intl.DateTimeFormat("en-US", {
        ...format,
        //    weekday: "short",
        //    month: "long",
        //    day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // year: 'numeric',
    });
    return date_time.format(new Date(date));
};

export const formatDateToStr = (date) => {
    // if (!isDate(date)) return "";

    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }

    return yyyy + "-" + mm + "-" + dd;
};

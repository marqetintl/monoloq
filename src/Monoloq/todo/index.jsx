class Todo {
    text = "";
    dt_start = null;
    dt_end = null;
    every = null;
    repeat = ["never", "day", "week", "2week", "month", "year", "custom"];
    frequency = [
        { day: "hours" },
        { week: "weekdays" },
        { month: "days-date" },
        { year: "months" },
    ];
    constructor(kwargs = {}) {
        Object.assign(this, kwargs);
    }
}


/*
I created a STATUS object, freeze prevents it from being changed.
in order not to write a string every time,
I will check the promise status in the slicer as status.{key}
*/

export const STATUS = Object.freeze({
    IDLE : "IDLE",
    LOADING : "LOADING",
    SUCCESS : "SUCCESS",
    FAIL : "FAIL"
})
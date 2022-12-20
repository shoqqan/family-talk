import {useEffect} from "react";

export const useOutsideAlerter = (fn:any, ref:any) => {
    useEffect(() => {
        function handleClickOutside(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
                fn();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
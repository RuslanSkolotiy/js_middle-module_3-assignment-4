import { useCallback, useEffect, useState } from "react";

export default function useViewportSize() {
    const [width, setWidth] = useState(window?.innerWidth);
    const [height, setHeight] = useState(window?.innerHeight);

    const handleResize = useCallback(()=> {
        setWidth(window?.innerWidth);
        setHeight(window?.innerHeight);
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [handleResize]);

    return { width, height };
}
